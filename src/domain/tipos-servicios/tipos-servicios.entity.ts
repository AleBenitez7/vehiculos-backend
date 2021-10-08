import { IsOptional } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agendamiento } from "../agendamientos/agendamientos.entity";
import { Servicios } from "../servicios/servicios.entity";

@Entity()
export class TiposServicios {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion: string;

    @Column()
    @IsOptional()
    fecha_creacion: Date;

    @Column()
    @IsOptional()
    fecha_alteracion: Date;
    
    @OneToMany(() => Servicios, servicio => servicio.tipo_servicio,{ onDelete: "CASCADE"})
    servicios: Servicios;   
    
    @OneToMany(() => Agendamiento, agendamiento => agendamiento.tiposservicio,{ onDelete: "CASCADE" })
    agendamiento: Agendamiento;
}