import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './domain/autos/autos.module';
import { ServiciosModule } from './domain/servicios/servicios.module';
import { UsuariosModule } from './domain/usuarios/usuarios.module';
import { TiposServiciosModule } from './domain/tipos-servicios/tipos-servicios.module';
import { AgendamientosModule } from './domain/agendamientos/agendamientos.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'scsp',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
  UsuariosModule,
  AutosModule,
  ServiciosModule,
  TiposServiciosModule,
  AgendamientosModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
