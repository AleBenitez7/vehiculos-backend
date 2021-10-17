import { IsOptional } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agendamiento } from "../agendamientos/agendamientos.entity";
import { Servicios } from "../servicios/servicios.entity";

@Entity()
export class TiposServicios {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsOptional()
    fecha_creacion: Date;

    @Column()
    @IsOptional()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;
    
    @OneToMany(() => Servicios, servicio => servicio.tiposservicio,{ onDelete: "CASCADE"})
    servicios: Servicios;   
    
    @OneToMany(() => Agendamiento, agendamiento => agendamiento.tiposservicio,{ onDelete: "CASCADE" })
    agendamiento: Agendamiento;
}