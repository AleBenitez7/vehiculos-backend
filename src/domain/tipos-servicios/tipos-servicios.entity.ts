import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Servicios } from "../servicios/servicios.entity";

@Entity()
export class TiposServicios {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion: string;
    
    @OneToMany(() => Servicios, servicio => servicio.tipo_servicio,{ cascade: true })
    servicios: Array<Servicios>;    
}