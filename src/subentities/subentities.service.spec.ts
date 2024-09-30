import { Test, TestingModule } from '@nestjs/testing';
import { SubentitiesService } from './subentities.service';

describe('SubentitiesService', () => {
  let service: SubentitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubentitiesService],
    }).compile();

    service = module.get<SubentitiesService>(SubentitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
