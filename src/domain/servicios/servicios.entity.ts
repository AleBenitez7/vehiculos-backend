import { TipoServicio } from "src/enums/TipoServicio";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tipo_servicio: TipoServicio;

    @Column()
    valor_servicio: number;

    @Column()
    fecha_servicio: Date;

    @Column()
    km_inicial: number;

    @Column()
    km_final: number;

    @Column()
    descripcion:string;
}