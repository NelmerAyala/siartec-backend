import { Test, TestingModule } from '@nestjs/testing';
import { TaxStampsService } from './tax_stamps.service';

describe('TaxStampsService', () => {
  let service: TaxStampsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxStampsService],
    }).compile();

    service = module.get<TaxStampsService>(TaxStampsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
