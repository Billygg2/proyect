import { Test, TestingModule } from '@nestjs/testing';
import { MateriasController } from './materias.controller';

describe('MateriasController', () => {
  let controller: MateriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriasController],
    }).compile();

    controller = module.get<MateriasController>(MateriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
