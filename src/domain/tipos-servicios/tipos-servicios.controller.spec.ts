import { Test, TestingModule } from '@nestjs/testing';
import { TipoServiciosController } from './tipos-servicios.controller';

describe('TipoServiciosController', () => {
  let controller: TipoServiciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoServiciosController],
    }).compile();

    controller = module.get<TipoServiciosController>(TipoServiciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
