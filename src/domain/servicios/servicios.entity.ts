import { Estado } from "src/enums/Estado.enum";
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

    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_fin: Date;

    @Column()
    km_inicial: number;

    @Column()
    km_final: number;

    @Column()
    valor_servicio: number;
    
    @Column()
    estado: Estado;

    @ManyToOne(() => TiposServicios, tipoServicio => tipoServicio.servicios,{
        eager: true,
        onDelete: "CASCADE"
    })
    tiposservicio: TiposServicios;

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