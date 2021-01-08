import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
    name:String,
    id:String,
    isFavirate:Boolean,
    lastOpenTime:Date
})
export const objectSchema = new mongoose.Schema({
    name:String,
    id:String,
    parent:String,
    matrix:Array,
    projectId:String
})
