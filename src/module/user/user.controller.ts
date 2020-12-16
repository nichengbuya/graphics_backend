import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() createUserDto:CreateUserDto){
        return await this.userService.create(createUserDto);
    }
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto:LoginDto){
        return await this.userService.login(loginDto);
    }


}
