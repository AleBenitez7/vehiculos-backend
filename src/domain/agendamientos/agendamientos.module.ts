import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamientosController } from './agendamientos.controller';
import { Agendamiento } from './agendamientos.entity';
import { AgendamientosService } from './agendamientos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Agendamiento])],
    controllers: [AgendamientosController],
    providers: [AgendamientosService]
})
export class AgendamientosModule {}
