import { Type } from "class-transformer";
import { IsOptional, IsString, Length } from "class-validator";

export class TipoServiciosDto {
    @Length(1)
    @IsString()
    descripcion: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(() => Date)
    @IsOptional()
    fechaAlteracion:Date;
}