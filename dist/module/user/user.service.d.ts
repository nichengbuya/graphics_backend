import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.schema';
export declare class UserService {
    private readonly userModel;
    private readonly authService;
    constructor(userModel: Model<User>, authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<{
        user: string;
    }>;
    isNameUnique(name: string): Promise<void>;
    login(loginDto: LoginDto): Promise<{
        name: string;
        accessToken: string;
    }>;
}
