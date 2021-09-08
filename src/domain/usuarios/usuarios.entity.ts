import { Status } from 'src/enums/status.enum';
import { TipoUsuario } from 'src/enums/TipoUsuario.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    fechaCreacion: Date;
}

