import * as mongoose from 'mongoose';
export const AuthSchema = new mongoose.Schema({
  username: String,
  id:String
//   author: Number,
//   status: String,
});