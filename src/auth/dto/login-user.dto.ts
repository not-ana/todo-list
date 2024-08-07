import { IsNotEmpty, IsStrongPassword, IsEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {

    @ApiProperty({
        description: "Email",
        nullable: false,
        required: true,
        type: "string",
        example: "youremail@example.com",
    })
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;


    @ApiProperty({
        description: "User Password",
        nullable: false,
        required: true,
        type: "string",
        example: "Password123",

    })
    @IsNotEmpty()
    @IsStrongPassword()
    readonly password: string;
}
