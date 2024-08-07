import { IsNotEmpty, IsString, IsEmail, IsStrongPassword, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    name: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}
 