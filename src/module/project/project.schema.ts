import * as mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

export const ProjectSchema = new mongoose.Schema({
    name:String,
    id:String,
    isFavirate:Boolean,
    objects:Array,
    applications:Array,
    img:String,
    lastOpenTime:Date
})
export const ObjectSchema = new mongoose.Schema({
    name:String,
    id:String,
    parent:String,
    matrix:Array,
    projectId:ObjectId,
    deviceId:String,
    uuid:String
})
