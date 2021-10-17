import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Estado } from "src/enums/Estado.enum";
 
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

    @Type(()=> Date)
    @IsOptional()
    fecha_inicio: Date;

    @Type(()=> Date)
    @IsOptional()
    fecha_fin: Date;

    @IsNumber()
    @IsOptional()
    km_inicial: number;
    
    @IsNumber()
    @IsOptional()
    km_final: number;
    
    @IsNumber()
    @IsOptional()
    valor_servicio: number;

    @IsEnum(Estado,{message: 'Error en estado'})
    estado:Estado
}