import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt'
import { makeSalt, encryptPassword } from 'src/common/crypt/cryptogram';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user') private readonly userModel:Model<User>,
        private readonly authService: AuthService
    ){
    }
    async create(createUserDto:CreateUserDto){
        const user = new this.userModel(createUserDto);
        await this.isNameUnique(user.username)
        user.salt = makeSalt();
        user.password = encryptPassword(createUserDto.password, user.salt); 
        await user.save();
        return {
            user:user.username
        }
    }
    async isNameUnique(name:string){
        const user =await this.userModel.findOne({username:name})
        if(user){
            throw new BadRequestException('name has exist')
        }
    }
    async login(loginDto:LoginDto){
        const user = await this.userModel.findOne({username:loginDto.username});
        const match = await this.authService.validateUser(loginDto.username,loginDto.password)
        if( !user || !match){
            throw new BadRequestException('name or password not right')
        }

        return {
            accessToken: await this.authService.createAccessToken(user)
        }

    }
}
