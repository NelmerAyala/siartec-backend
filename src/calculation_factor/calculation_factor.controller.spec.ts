import { Test, TestingModule } from '@nestjs/testing';
import { CalculationFactorController } from './calculation_factor.controller';
import { CalculationFactorService } from './calculation_factor.service';

describe('CalculationFactorController', () => {
  let controller: CalculationFactorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculationFactorController],
      providers: [CalculationFactorService],
    }).compile();

    controller = module.get<CalculationFactorController>(CalculationFactorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
