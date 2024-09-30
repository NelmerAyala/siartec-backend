import { Module } from '@nestjs/common';
import { PointOfSalesService } from './point_of_sales.service';
import { PointOfSalesController } from './point_of_sales.controller';

@Module({
  controllers: [PointOfSalesController],
  providers: [PointOfSalesService],
})
export class PointOfSalesModule {}
