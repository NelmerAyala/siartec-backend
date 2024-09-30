import { Test, TestingModule } from '@nestjs/testing';
import { TaxStampsPaymentsService } from './tax_stamps_payments.service';

describe('TaxStampsPaymentsService', () => {
  let service: TaxStampsPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxStampsPaymentsService],
    }).compile();

    service = module.get<TaxStampsPaymentsService>(TaxStampsPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
