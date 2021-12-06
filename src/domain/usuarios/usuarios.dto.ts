import { TipoUsuario } from "src/enums/TipoUsuario.enum";
import { Status } from "src/enums/status.enum";
import { IsEnum, IsInt, IsOptional, IsString, Length } from "class-validator";
import { Type } from "class-transformer";

export class UsuariosDto {

    @Type(()=> Date)                           
    @IsOptional()
    fecha_creacion: Date;

    @Type(()=> Date)
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @Length(5)
    @IsString()
    nombre: string;
    
    @IsString()
    login: string;

    @IsString()
    password: string;

    @IsEnum (TipoUsuario, {message: 'Opcion invalida'})
    tipo_usuario: TipoUsuario;

    @IsEnum(Status)
    status:Status;
}

