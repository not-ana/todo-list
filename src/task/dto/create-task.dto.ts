import { IsBoolean, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {
   
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    isCompleted: boolean;
    
}
 