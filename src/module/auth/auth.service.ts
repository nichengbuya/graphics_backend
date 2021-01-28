import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
import { JwtPayload } from './jwt.strategy';
import { encryptPassword } from 'src/common/crypt/cryptogram';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    @InjectModel('user') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) { }
  async createAccessToken(user:User) {
    const payload = {
      username: user.username,
      sub: user._id,
      role: user.role,
    };
    console.log('JWT验证 - Step 3: 处理 jwt 签证');
    const token = this.jwtService.sign(payload);
    return token;
  }
  async validateUser(username: string, password: string): Promise<any> {
    console.log('JWT验证 - Step 2: 校验用户信息');
    const user = await this.userModel.findOne({ username: username });
    if (user) {
      const hashedPassword = user.password;
      const salt = user.salt;
      // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword === hashPassword) {
        return true
      }else{
        return false
      }
    }
    return new BadRequestException('user not exist')

  }

}
