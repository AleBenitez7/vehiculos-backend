import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutosDto } from './autos.dto';
import { Autos } from './autos.entity';

@Injectable()
export class AutosService {
    constructor(
        @InjectRepository(Autos)
        private readonly repository: Repository<Autos>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Car does not exist');
        return post;
      }
    
      async createOne(dto: AutosDto) {
       const car = this.repository.create(dto);
        return await this.repository.save(car);
      }
    
      async editOne(id: number, dto: AutosDto) {
        const car = await this.repository.findOne(id);
    
        if (!car) throw new NotFoundException('Car does not exist');
    
        const editedCar = Object.assign(car, dto);
        return await this.repository.save(editedCar);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
    }
}
