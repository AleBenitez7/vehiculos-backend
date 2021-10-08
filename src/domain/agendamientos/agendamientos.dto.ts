import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { TipoAgendamiento } from "src/enums/TipoAgendamiento.enum";
import { TipoPeriodo } from "src/enums/TipoPeriodo.enum";

export class AgendamientosDto{
    
    @IsDate()
    @IsOptional()
    fecha_creacion: Date;

    @IsDate()
    @IsOptional()
    fecha_alteracion: Date;

    @IsString()
    @IsOptional()
    descripcion:string;
    
    @IsEnum(TipoAgendamiento, {message: 'Opción no válida'})
    tipo_agendamiento: TipoAgendamiento;

    @IsDate()
    @IsOptional()
    fecha_objetivo: Date;

    @IsEnum(TipoPeriodo,  {message: 'Opción no válida'})
    tipo_periodo: TipoPeriodo;

    @IsNumber()
    @IsOptional()
    periodo:number;
}
