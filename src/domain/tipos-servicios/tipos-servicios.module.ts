import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoServiciosController } from './tipos-servicios.controller';
import { TiposServicios } from './tipos-servicios.entity';
import { TiposServiciosService } from './tipos-servicios.service';

@Module({
  imports: [TypeOrmModule.forFeature([TiposServicios])],
  controllers: [TipoServiciosController],
  providers: [TiposServiciosService]
})
export class TiposServiciosModule {}
