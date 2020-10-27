import { Document } from 'mongoose';
export interface Device extends Document {
    readonly name: String;
    readonly url: String;
    readonly img: String;
    readonly type: String;
    readonly id: String;
}
