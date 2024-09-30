import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTypesController } from './transactions_types.controller';
import { TransactionsTypesService } from './transactions_types.service';

describe('TransactionsTypesController', () => {
  let controller: TransactionsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsTypesController],
      providers: [TransactionsTypesService],
    }).compile();

    controller = module.get<TransactionsTypesController>(TransactionsTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
