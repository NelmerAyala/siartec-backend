import { Test, TestingModule } from '@nestjs/testing';
import { ContributorsTypesService } from './contributors_types.service';

describe('ContributorsTypesService', () => {
  let service: ContributorsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContributorsTypesService],
    }).compile();

    service = module.get<ContributorsTypesService>(ContributorsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
