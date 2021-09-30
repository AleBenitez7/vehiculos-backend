import { Type } from "class-transformer";
import { IsDecimal, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { TipoServicio } from "src/enums/TipoServicio";
 
export class ServiciosDto {
    
    @IsEnum(TipoServicio,{message: 'Opcion no valida!'})
    tipo_servicio: TipoServicio;

    @IsNumber()
    @IsOptional()
    valor_servicio: number;

    @Type(()=> Date)
    @IsOptional()
    fecha_servicio: Date;

    @IsNumber()
    @IsOptional()
    km_inicial: number;

    @IsNumber()
    @IsOptional()
    km_final: number;

    @IsString()
    @IsOptional()
    descripcion: string;
}