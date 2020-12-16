import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(createUserDto: CreateUserDto): Promise<{
        user: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        name: string;
        accessToken: string;
    }>;
}
