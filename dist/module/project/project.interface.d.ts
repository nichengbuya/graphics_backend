import { Document } from 'mongoose';
export interface Project extends Document {
    readonly name: String;
}
export declare class CreateProjectDto {
    readonly name: string;
}
