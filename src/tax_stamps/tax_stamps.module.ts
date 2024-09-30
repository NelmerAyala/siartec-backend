import { Module } from '@nestjs/common';
import { TaxStampsService } from './tax_stamps.service';
import { TaxStampsController } from './tax_stamps.controller';

@Module({
  controllers: [TaxStampsController],
  providers: [TaxStampsService],
})
export class TaxStampsModule {}
