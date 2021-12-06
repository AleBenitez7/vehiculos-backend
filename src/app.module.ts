import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './domain/autos/autos.module';
import { ServiciosModule } from './domain/servicios/servicios.module';
import { UsuariosModule } from './domain/usuarios/usuarios.module';
import { TiposServiciosModule } from './domain/tipos-servicios/tipos-servicios.module';
import { AgendamientosModule } from './domain/agendamientos/agendamientos.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
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
  AgendamientosModule,
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
