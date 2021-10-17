import { Type } from "class-transformer";
import { IsDecimal, IsEnum, IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { Disponibilidad } from "src/enums/Disponibilidad.enum";
import { Status } from "src/enums/status.enum";

export class AutosDto{

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

    @IsNumber()
    @IsOptional()
    kilometraje: number;

    @IsInt()
    @IsOptional()
    anio_modelo: number;

    @IsInt()
    @IsOptional()
    anio_fabricacion: number; 
    
    @IsEnum(Disponibilidad, {message: 'Opción invalida'})
    disponibilidad: Disponibilidad;
}