import { Type } from "class-transformer";
import { IsDecimal, IsEnum, IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { Disponibilidad } from "src/enums/Disponibilidad.enum";
import { Status } from "src/enums/status.enum";

export class AutosDto{

    @IsString()
    @IsOptional()
    chapa: string;

    @IsString()
    @IsOptional()
    chasis: string;

    @IsString()
    @IsOptional()
    fabricante: string;

    @IsString()
    @IsOptional()
    modelo: string;

    @IsDecimal()
    @IsOptional()
    kilometraje: number;

    @IsInt()
    @IsOptional()
    anio_modelo: number;

    @IsInt()
    @IsOptional()
    anio_fabricacion: number; 
    
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(Disponibilidad, {message: 'Opción invalida'})
    disponibilidad: Disponibilidad;

    @Type(()=> Date)
    @IsOptional()
    fecha_creacion: Date;

    @Type(()=> Date)
    @IsOptional()
    fecha_alteracion: Date;
}