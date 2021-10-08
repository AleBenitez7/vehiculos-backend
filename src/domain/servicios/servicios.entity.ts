import { TipoServicio } from "src/enums/TipoServicio.enum";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Autos } from "../autos/autos.entity";
import { TiposServicios } from "../tipos-servicios/tipos-servicios.entity";
import { Usuarios } from "../usuarios/usuarios.entity";

@Entity()
export class Servicios {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion:string;

    @ManyToOne(() => TiposServicios, tipoServicio => tipoServicio.servicios,{
        eager: true,
        onDelete: "CASCADE"
    })
    tipo_servicio:string;

    @ManyToOne(() => Autos, auto => auto.servicios,{
        eager: true,
        onDelete: "CASCADE"
    })
    auto:Autos;

    @ManyToOne(() => Usuarios, usuario => usuario.servicios,{
        eager: true,
        onDelete: "CASCADE"
    })
    usuario :Usuarios;
}