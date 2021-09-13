import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutosController } from './autos.controller';
import { Autos } from './autos.entity';
import { AutosService } from './autos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Autos])],
  controllers: [AutosController],
  providers: [AutosService]
})
export class AutosModule {}
