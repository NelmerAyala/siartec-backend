import { Test, TestingModule } from '@nestjs/testing';
import { TaxStampsController } from './tax_stamps.controller';
import { TaxStampsService } from './tax_stamps.service';

describe('TaxStampsController', () => {
  let controller: TaxStampsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxStampsController],
      providers: [TaxStampsService],
    }).compile();

    controller = module.get<TaxStampsController>(TaxStampsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
