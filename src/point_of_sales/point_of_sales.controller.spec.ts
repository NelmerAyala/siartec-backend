import { Test, TestingModule } from '@nestjs/testing';
import { PointOfSalesController } from './point_of_sales.controller';
import { PointOfSalesService } from './point_of_sales.service';

describe('PointOfSalesController', () => {
  let controller: PointOfSalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointOfSalesController],
      providers: [PointOfSalesService],
    }).compile();

    controller = module.get<PointOfSalesController>(PointOfSalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
