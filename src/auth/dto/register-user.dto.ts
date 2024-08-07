import { ApiProperty } from "@nestjs/swagger";

import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength, NotContains } from "class-validator";


export class RegisterUserDto {

    @ApiProperty({
        description: "Name",
        nullable: false,
        required: true,
        type: "string",
        example: "John Sample",
    })
    @IsString()
    @MinLength(3)
    name: string;

    
    @ApiProperty({
        description: "Email",
        uniqueItems: true,
        nullable: false,
        required: true,
        type: "string",
        example: "youremail@example.com",
    })
    @IsEmail()
    email: string;
    
    
    @ApiProperty({
        description: "A senha deve possuir no mínimo 8 caracteres, sendo: 1 maiúsculo, 1 minúsculo e 1 número",
        nullable: false,
        required: true,
        type: "string",
        example: "Senha123",
    })
    @IsString()
    @MinLength(6)
    @MaxLength(16)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
        message: 'Password must contain at least one uppercase, one lowercase and one number',
    })
    @NotContains(' ', { message: 'A senha nao deve conter espaços' }) 
    password: string;
    

    @ApiProperty({
        description: "As senhas devem coincidir",
        nullable: false,
        required: true,
        type: "string",
        example: "Senha123",
    })
    @IsString()
    passwordconf: string;

    

}