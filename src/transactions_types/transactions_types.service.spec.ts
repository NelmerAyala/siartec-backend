import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTypesService } from './transactions_types.service';

describe('TransactionsTypesService', () => {
  let service: TransactionsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTypesService],
    }).compile();

    service = module.get<TransactionsTypesService>(TransactionsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
