import { Schema , Document, HookNextFunction } from "mongoose";
import * as bcrypt from 'bcrypt'
export const  UserSchema  = new Schema({
    name:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:[String],
        default:['user']
    }
    
})
export class User extends Document{
    name:string;
    password:string;
    role?:[string]
}
UserSchema.pre('save', async function(next: HookNextFunction) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      // tslint:disable-next-line:no-string-literal
      const hashed = await bcrypt.hash(this['password'], 10);
      // tslint:disable-next-line:no-string-literal
      this['password'] = hashed;
      return next();
    } catch (err) {
      return next(err);
    }
  });
