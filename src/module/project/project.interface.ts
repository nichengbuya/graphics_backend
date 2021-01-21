import {Document} from 'mongoose';
export interface Project extends Document{
    name:String,
    objects:Array<any>,
    applications:Array<any>
    
}
export interface Object extends Document{
    name:String,
    parent:String,
    matrix:Array<number>,
    projectId:String,
    uuid:String
}
export class CreateProjectDto{
    readonly name:string;
}
export class UpdateProjectDto{
    projectId:string;
    objects:Array<Object>;
}
export class GetObjectByIdDto{
    projectId:string;
}