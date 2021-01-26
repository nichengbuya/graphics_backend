import {Document} from 'mongoose';
export interface Project extends Document{
    name:string,
    objects:Array<any>,
    applications:Array<any>,
    img:string
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
    name:string;
    img:string;
}
export class UpdateProjectDto{
    projectId:string;
    objects:Array<Object>;
    img:String;
}
export class GetObjectByIdDto{
    id:string;
}