import { TipoUsuario } from "src/enums/TipoUsuario.enum";
import { Status } from "src/enums/status.enum";
import { IsEnum, IsInt, IsOptional, IsString, Length } from "class-validator";
import { Type } from "class-transformer";

export class UsuariosDto {

    @Length(5)
    @IsString()
    nombre: string;
    
    @IsString()
    @IsOptional()
    login: string;

    @IsString()
    @IsOptional()
    contrasena: string;

    @IsEnum (TipoUsuario, {message: 'Opcion invalida'})
    tipo_usuario: TipoUsuario;

    @IsEnum(Status)
    status:Status;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;
}

