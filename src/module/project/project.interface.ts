import {Document} from 'mongoose';
export interface Project extends Document{
    name:String,
    objects:Array<any>,
    applications:Array<any>
    img:String;
}
export interface Object extends Document{
    name:String,
    parent:String,
    matrix:Array<number>,
    projectId:String,
    deviceId:String,
    uuid:String
}
export class CreateProjectDto{
    readonly name:string;
}
export class UpdateProjectDto{
    projectId:string;
    objects:Array<Object>;
    img:String;
}
export class GetObjectByIdDto{
    id:string;
}