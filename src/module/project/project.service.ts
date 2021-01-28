import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto, Project, Object, UpdateProjectDto, GetObjectByIdDto } from './project.interface';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel('project') private readonly projectModel: Model<Project>,
        @InjectModel('object') private readonly objectModel: Model<Object>
    ) { }

    async getAllProject() {
        return await this.projectModel.find().exec();
    }

    async createProject(msg: CreateProjectDto) {
        await this.isNameUnique(msg.name)
        const project = new this.projectModel(msg);
        await project.save();
        project.img = `project/${project._id}.png`
        await project.save();
        // const project = this.projectModel.find({name:msg.name}); 
        return project;
    }

    async isNameUnique(name: string) {
        const project = await this.projectModel.findOne({ name: name });
        if (project) {
            throw new BadRequestException('name has exits')
        }
    }

    async deleteProject(msg) {
        const project = await this.projectModel.findOne({id: msg.id})
        const path = join(__dirname,`../../../public`,`${project.img}`)
        console.log(path)
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        } 
        for(let i of project.objects){
            await this.objectModel.deleteOne({ uuid:i});
        }
        await this.projectModel.deleteOne({ id: msg.id })
        return 'ok'
    }
    
    async updateProject(msg: UpdateProjectDto) {
        const project = await this.projectModel.findOne({ _id: msg.projectId });
        if (!project) {
            throw new BadRequestException('wrong')
        }
        const preMap = new Set(project.objects);
        const curMap = new Set(msg.objects.map(i=>i.uuid));
        for(let o of msg.objects ){
            let obj = await this.objectModel.findOne({uuid:o.uuid});
            if(obj){
                obj = Object.assign(obj,o);
                await obj.save();
            }else{
                obj = new this.objectModel(o);
                obj.projectId = msg.projectId;
                await obj.save();
                preMap.add(obj.uuid)
            }
        }
        for(let o of preMap){
            if(!curMap.has(o)){
                await this.objectModel.deleteOne({uuid:o});
                preMap.delete(o);
            }
        }
        project.objects = Array.from(curMap);
        await project.save();
        return 'save success';
    }

    async getObjectById(msg: GetObjectByIdDto) {
        const objects = await this.objectModel.find({ projectId: msg.id });
        return objects;
    }

    async uploadFile(file,msg){
        return 'success'
    }

}
