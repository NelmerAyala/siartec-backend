import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxStampsPaymentDto } from './create-tax_stamps_payment.dto';

export class UpdateTaxStampsPaymentDto extends PartialType(CreateTaxStampsPaymentDto) {}
