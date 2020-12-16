import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user') private readonly userModel:Model<User>,
        private readonly authService: AuthService
    ){
    }
    async create(createUserDto:CreateUserDto){
        const user = new this.userModel(createUserDto);
        await this.isNameUnique(user.name)
        await user.save();
        return {
            user:user.name
        }
    }
    async isNameUnique(name:string){
        const user =await this.userModel.findOne({name:name})
        if(user){
            throw new BadRequestException('name has exist')
        }
    }
    async login(loginDto:LoginDto){

        const user = await this.userModel.findOne({name:loginDto.name});
        const match = await bcrypt.compare(loginDto.password,user.password)
        if(!user || match){
            throw new BadRequestException('name or password not right')
        }
        return {
            name: user.name,
            accessToken: await this.authService.createAccessToken(user._id)
        }

    }
}
