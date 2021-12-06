import { Status } from 'src/enums/status.enum';
import { TipoUsuario } from 'src/enums/TipoUsuario.enum';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendamiento } from '../agendamientos/agendamientos.entity';
import { Servicios } from '../servicios/servicios.entity';
import * as bcrypt from 'bcrypt';
import { classToPlain, Exclude } from 'class-transformer';
@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fecha_creacion: Date;

    @Column()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;
    
    @Column()
    nombre: string;
    
    @Column({
      unique:true
    })
    readonly login: string;
    
    @Column()
    @Exclude({ toPlainOnly: true})
    password: string;

    @Column()
    tipo_usuario: TipoUsuario;

    @Column()
    status: Status;
    
    @OneToMany(() => Servicios, servicio => servicio.usuario,{ onDelete: "CASCADE" })
    servicios: Servicios[];

    @OneToMany(() => Agendamiento, agendamiento => agendamiento.usuario,{ onDelete: "CASCADE" })
    agendamiento: Agendamiento[];
  //
    toJSON(){
      return classToPlain(this);
    }

    //Autenticacion
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if(!this.password){
        this.password = this.login;
      }
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }

    async validatePassword(password: string){
      return await bcrypt.compareSync(password, this.password);
    }
}

