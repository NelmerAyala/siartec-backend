import { Module } from '@nestjs/common';
import { LockersPointOfSalesService } from './lockers_point_of_sales.service';
import { LockersPointOfSalesController } from './lockers_point_of_sales.controller';

@Module({
  controllers: [LockersPointOfSalesController],
  providers: [LockersPointOfSalesService],
})
export class LockersPointOfSalesModule {}
