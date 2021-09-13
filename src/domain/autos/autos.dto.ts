import { IsDecimal, IsEnum, IsInt, IsNumber, IsOptional, IsString } from "class-validator";
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

    @IsEnum(Status)
    status: Status;
}