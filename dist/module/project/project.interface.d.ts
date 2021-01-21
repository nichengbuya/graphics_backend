import { Document } from 'mongoose';
export interface Project extends Document {
    name: String;
    objects: Array<any>;
    applications: Array<any>;
}
export interface Object extends Document {
    name: String;
    parent: String;
    matrix: Array<number>;
    projectId: String;
    uuid: String;
}
export declare class CreateProjectDto {
    readonly name: string;
}
export declare class UpdateProjectDto {
    projectId: string;
    objects: Array<Object>;
}
export declare class GetObjectByIdDto {
    projectId: string;
}
