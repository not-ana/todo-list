import { IsNotEmpty, IsStrongPassword } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    readonly new_password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    readonly old_password: string;
}
 