import { Schema, Document } from "mongoose";
export declare const UserSchema: Schema<any>;
export declare class User extends Document {
    name: string;
    password: string;
    role?: [string];
}
