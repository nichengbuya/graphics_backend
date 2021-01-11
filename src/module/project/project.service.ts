import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto, Project } from './project.interface';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel('project') private readonly projectModel: Model<Project>
    ){}
    async getAllProject(){
       return await this.projectModel.find().exec(); 
    }
    async createProject(msg:CreateProjectDto){
        await this.isNameUnique(msg.name)
        const project = new this.projectModel(msg);
        await project.save();
        return project;
    }
    async isNameUnique(name:string){
        const project = await this.projectModel.findOne({name:name});
        if(project){
            throw new BadRequestException('name has exits')
        }
    }
    async deleteProject(msg){
        await this.projectModel.deleteOne({id:msg.id})
        return 'ok'
    }
    async updateProject(msg){
        return 'a'
    }

}
