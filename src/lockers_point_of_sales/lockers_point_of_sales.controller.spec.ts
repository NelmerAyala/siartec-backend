import { Test, TestingModule } from '@nestjs/testing';
import { LockersPointOfSalesController } from './lockers_point_of_sales.controller';
import { LockersPointOfSalesService } from './lockers_point_of_sales.service';

describe('LockersPointOfSalesController', () => {
  let controller: LockersPointOfSalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LockersPointOfSalesController],
      providers: [LockersPointOfSalesService],
    }).compile();

    controller = module.get<LockersPointOfSalesController>(LockersPointOfSalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
