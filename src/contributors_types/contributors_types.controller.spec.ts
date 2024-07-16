import { Test, TestingModule } from '@nestjs/testing';
import { ContributorsTypesController } from './contributors_types.controller';
import { ContributorsTypesService } from './contributors_types.service';

describe('ContributorsTypesController', () => {
  let controller: ContributorsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContributorsTypesController],
      providers: [ContributorsTypesService],
    }).compile();

    controller = module.get<ContributorsTypesController>(ContributorsTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
