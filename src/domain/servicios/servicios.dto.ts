import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { Autos } from "../autos/autos.entity";
import { Usuarios } from "../usuarios/usuarios.entity";
 
export class ServiciosDto {

    @Type(()=> Date)
    @IsOptional()
    fecha_creacion: Date;

    @Type(()=> Date)
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;
    
    @IsString()
    tipo_servicio:string;
}