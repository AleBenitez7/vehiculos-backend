import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoServiciosDto } from './tipos-servicios.dto';
import { TiposServicios } from './tipos-servicios.entity';

@Injectable()
export class TiposServiciosService {

    constructor(@InjectRepository(TiposServicios)
        private readonly repository: Repository<TiposServicios>,
    ) {}

       async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('El id ingresado no existe');
        return post;
      }
    
      async createOne(dto: TipoServiciosDto) {
        const tiposServicios = this.repository.create(dto);
        return await this.repository.save(tiposServicios);
      }
    
      async editOne(id: number, dto: TipoServiciosDto) {
        const tiposServicios = await this.repository.findOne(id);
    
        if (!tiposServicios) throw new NotFoundException('El id ingresado no existe');
    
        const editedService = Object.assign(tiposServicios, dto);
        return await this.repository.save(editedService);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }
}
