import { ProjectService } from './project.service';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getAllProject(): Promise<import("./project.interface").Project[]>;
    createProject(msg: any): Promise<import("./project.interface").Project>;
    updateProject(msg: any): Promise<string>;
    deleteProject(msg: any): Promise<string>;
}
