import { Status } from "src/enums/status.enum";
import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autos{
    @PrimaryGeneratedColumn()
    id: number;

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
    descripcion: string;

    @Column()
    status:Status;
}