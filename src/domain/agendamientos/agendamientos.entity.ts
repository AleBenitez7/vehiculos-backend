import { TipoAgendamiento } from "src/enums/TipoAgendamiento.enum";
import { TipoPeriodo } from "src/enums/TipoPeriodo.enum";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Autos } from "../autos/autos.entity";
import { TiposServicios } from "../tipos-servicios/tipos-servicios.entity";
import { Usuarios } from "../usuarios/usuarios.entity";

@Entity()
export class Agendamiento {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;

    @Column()
    tipo_agendamiento: TipoAgendamiento;

    @Column()
    fecha_objetivo: Date;

    @Column()
    tipo_periodo: TipoPeriodo;

    @Column()
    periodo:number;

    @ManyToOne(() => Autos, (auto) => auto.agendamiento, {
        nullable: false, 
        onDelete: 'CASCADE'
    })
    auto: Autos;

    @ManyToOne(() => Usuarios, (usuario) => usuario.agendamiento, {
        nullable: false, 
        onDelete: 'CASCADE',
    })
    usuario: Usuarios;

    @ManyToOne(() => TiposServicios, (tiposservicio) => tiposservicio.agendamiento, {
        nullable: false, 
        onDelete: 'CASCADE',
    })
    tiposservicio: TiposServicios;
}