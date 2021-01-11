import { Model } from 'mongoose';
import { CreateProjectDto, Project } from './project.interface';
export declare class ProjectService {
    private readonly projectModel;
    constructor(projectModel: Model<Project>);
    getAllProject(): Promise<Project[]>;
    createProject(msg: CreateProjectDto): Promise<Project>;
    isNameUnique(name: string): Promise<void>;
    deleteProject(msg: any): Promise<string>;
    updateProject(msg: any): Promise<string>;
}
