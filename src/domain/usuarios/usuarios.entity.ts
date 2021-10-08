import { Status } from 'src/enums/status.enum';
import { TipoUsuario } from 'src/enums/TipoUsuario.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendamiento } from '../agendamientos/agendamientos.entity';
import { Servicios } from '../servicios/servicios.entity';

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;
    
    @Column()
    login: string;
    
    @Column()
    contrasena: string;

    @Column()
    tipo_usuario: TipoUsuario;

    @Column()
    status: Status;
    
    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @OneToMany(() => Servicios, servicio => servicio.usuario,{ onDelete: "CASCADE" })
    servicios: Servicios[];

    @OneToMany(() => Agendamiento, agendamiento => agendamiento.usuario,{ onDelete: "CASCADE" })
    agendamiento: Agendamiento[];
}

