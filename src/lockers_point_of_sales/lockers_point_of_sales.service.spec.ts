import { Test, TestingModule } from '@nestjs/testing';
import { LockersPointOfSalesService } from './lockers_point_of_sales.service';

describe('LockersPointOfSalesService', () => {
  let service: LockersPointOfSalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LockersPointOfSalesService],
    }).compile();

    service = module.get<LockersPointOfSalesService>(LockersPointOfSalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
