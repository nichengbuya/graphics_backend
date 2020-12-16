import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {MongooseModule}  from '@nestjs/mongoose'
import { UserSchema } from './user.schema';
import { AuthModule } from '../auth/auth.module';
@Module({
    imports:[
       MongooseModule.forFeature([{name:'user',schema: UserSchema}]) ,
       AuthModule
    ],
    controllers: [UserController],
    providers:[UserService]
})
export class UserModule {}
