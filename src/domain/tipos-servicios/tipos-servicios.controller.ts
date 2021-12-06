import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TipoServiciosDto } from './tipos-servicios.dto';
import { TiposServiciosService } from './tipos-servicios.service';

@ApiTags('TiposServicios')
@Controller('tiposServicios')
export class TipoServiciosController {

  constructor(private readonly service: TiposServiciosService) {}

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getMany() {
      const data = await this.service.getAll();
      return { data };
    }
    
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number) {
        const data = await this.service.getById(id);
        return { data };
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createPost(@Body() dto: TipoServiciosDto) {
        const data = await this.service.createOne(dto);
        return data;
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: TipoServiciosDto) {
        const data = await this.service.editOne(id, dto);
        return data;
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }
}
