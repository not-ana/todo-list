import { IsNotEmpty, IsString, IsEmail, IsStrongPassword } from "class-validator";

export class CreateUserDto {
   
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}
 