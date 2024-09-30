import { Test, TestingModule } from '@nestjs/testing';
import { TaxStampsPaymentsController } from './tax_stamps_payments.controller';
import { TaxStampsPaymentsService } from './tax_stamps_payments.service';

describe('TaxStampsPaymentsController', () => {
  let controller: TaxStampsPaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxStampsPaymentsController],
      providers: [TaxStampsPaymentsService],
    }).compile();

    controller = module.get<TaxStampsPaymentsController>(TaxStampsPaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
