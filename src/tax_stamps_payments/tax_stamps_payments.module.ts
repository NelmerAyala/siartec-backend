import { Module } from '@nestjs/common';
import { TaxStampsPaymentsService } from './tax_stamps_payments.service';
import { TaxStampsPaymentsController } from './tax_stamps_payments.controller';

@Module({
  controllers: [TaxStampsPaymentsController],
  providers: [TaxStampsPaymentsService],
})
export class TaxStampsPaymentsModule {}
