import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema({
    name:String,
    url:String,
    img:String,
    type:String,
    id:String,
    attach:String
});