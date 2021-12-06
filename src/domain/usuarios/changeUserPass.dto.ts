import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class ChangeUserPassDto{   
    @ApiProperty()
    @IsString()
    login: string;

    @ApiProperty()
    @IsString()
    password: string;
    
    @ApiProperty()
    @IsString()
    newPassword: string;
}