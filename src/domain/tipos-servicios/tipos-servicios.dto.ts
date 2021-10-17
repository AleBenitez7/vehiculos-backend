import { Type } from "class-transformer";
import { IsOptional, IsString, Length } from "class-validator";

export class TipoServiciosDto {
    
    @Type(()=> Date)
    @IsOptional()
    fecha_creacion: Date;

    @Type(() => Date)
    @IsOptional()
    fecha_alteracion:Date;
    
    @Length(1)
    @IsString()
    descripcion: string;
}