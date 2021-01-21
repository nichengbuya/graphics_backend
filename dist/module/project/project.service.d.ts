import { Model } from 'mongoose';
import { CreateProjectDto, Project, Object, UpdateProjectDto, GetObjectByIdDto } from './project.interface';
export declare class ProjectService {
    private readonly projectModel;
    private readonly objectModel;
    constructor(projectModel: Model<Project>, objectModel: Model<Object>);
    getAllProject(): Promise<Project[]>;
    createProject(msg: CreateProjectDto): Promise<Project>;
    isNameUnique(name: string): Promise<void>;
    deleteProject(msg: any): Promise<string>;
    updateProject(msg: UpdateProjectDto): Promise<string>;
    getObjectById(msg: GetObjectByIdDto): Promise<Object[]>;
}
