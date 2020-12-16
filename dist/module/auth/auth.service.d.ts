import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    createAccessToken(userId: string): Promise<string>;
    validateUser(jwtPayload: any): Promise<any>;
}
