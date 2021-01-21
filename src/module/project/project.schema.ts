import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
    name:String,
    id:String,
    isFavirate:Boolean,
    objects:Array,
    applications:Array,
    lastOpenTime:Date
})
export const ObjectSchema = new mongoose.Schema({
    name:String,
    id:String,
    parent:String,
    matrix:Array,
    projectId:String
})
