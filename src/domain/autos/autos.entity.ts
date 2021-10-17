import { Disponibilidad } from "src/enums/Disponibilidad.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agendamiento } from "../agendamientos/agendamientos.entity";
import { Servicios } from "../servicios/servicios.entity";

@Entity()
export class Autos{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_creacion: Date;  
    
    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;
      
    @Column()
    chapa: string;

    @Column()
    chasis: string;

    @Column()
    fabricante: string;

    @Column()
    modelo: string;

    @Column()
    kilometraje:number;

    @Column ()
    anio_modelo: number;

    @Column()
    anio_fabricacion: number;

    @Column()
    disponibilidad:Disponibilidad;

    @OneToMany(() => Servicios, servicio => servicio.auto,{ onDelete: "CASCADE" })
    servicios: Servicios[];

    @OneToMany(() => Agendamiento, agendamiento => agendamiento.auto,{ onDelete: "CASCADE" })
    agendamiento: Agendamiento[];
}