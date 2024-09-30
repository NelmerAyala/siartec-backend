import { Test, TestingModule } from '@nestjs/testing';
import { SubentitiesController } from './subentities.controller';
import { SubentitiesService } from './subentities.service';

describe('SubentitiesController', () => {
  let controller: SubentitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubentitiesController],
      providers: [SubentitiesService],
    }).compile();

    controller = module.get<SubentitiesController>(SubentitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
