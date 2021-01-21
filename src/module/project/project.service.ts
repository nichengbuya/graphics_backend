import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto, Project, Object, UpdateProjectDto, GetObjectByIdDto } from './project.interface';

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
        await this.projectModel.deleteOne({ id: msg.id })
        return 'ok'
    }
    async updateProject(msg: UpdateProjectDto) {
        const project = await this.projectModel.findOne({ _id: msg.projectId });
        if (!project) {
            throw new BadRequestException('wrong')
        }
        project.objects = msg.objects.map(i => i.uuid);
        project.save();
        for (let o of msg.objects) {
            let obj = await this.objectModel.findOne({ id: o.id });
            if (obj) {
                Object.assign(obj, o)
                obj.save()
            } else {
                const newObj = new this.objectModel(msg);
                Object.assign(newObj, o)
                newObj.save()
            }
        }
        return 'save success';
    }
    async getObjectById(msg: GetObjectByIdDto) {
        const objects = await this.objectModel.find({ projectId: msg.projectId });
        return objects;
    }

}
