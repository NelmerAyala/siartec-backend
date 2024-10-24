import { Test, TestingModule } from '@nestjs/testing';
import { CalculationFactorService } from './calculation_factor.service';

describe('CalculationFactorService', () => {
  let service: CalculationFactorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculationFactorService],
    }).compile();

    service = module.get<CalculationFactorService>(CalculationFactorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
