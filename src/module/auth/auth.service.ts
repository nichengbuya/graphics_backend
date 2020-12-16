import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    @InjectModel('user') private readonly userModel:Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async createAccessToken(userId:string){
    const accessToken = this.jwtService.sign({userId})
    return accessToken;
  }
  async validateUser(jwtPayload): Promise<any> {
    const user = await this.userModel.findOne({_id: jwtPayload.userId});
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }


}
