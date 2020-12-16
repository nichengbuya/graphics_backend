import { IsNotEmpty, IsString, MinLength, MaxLength, IsEmail } from "class-validator";

export class CreateUserDto{
      @IsNotEmpty()
      @IsString()
      @MinLength(5)
      @MaxLength(255)
      readonly name: string;
  
      // Email
      // @IsNotEmpty()
      // @IsString()
      // @MinLength(5)
      // @MaxLength(255)
      // @IsEmail()
      // readonly email: string;
  
      // Password
      @IsNotEmpty()
      @IsString()
      @MinLength(5)
      @MaxLength(1024)
      readonly password: string;

}