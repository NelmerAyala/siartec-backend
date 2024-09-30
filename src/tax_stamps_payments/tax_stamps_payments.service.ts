import { Injectable } from '@nestjs/common';
import { CreateTaxStampsPaymentDto } from './dto/create-tax_stamps_payment.dto';
import { UpdateTaxStampsPaymentDto } from './dto/update-tax_stamps_payment.dto';

@Injectable()
export class TaxStampsPaymentsService {
  create(createTaxStampsPaymentDto: CreateTaxStampsPaymentDto) {
    return 'This action adds a new taxStampsPayment';
  }

  findAll() {
    return `This action returns all taxStampsPayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxStampsPayment`;
  }

  update(id: number, updateTaxStampsPaymentDto: UpdateTaxStampsPaymentDto) {
    return `This action updates a #${id} taxStampsPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxStampsPayment`;
  }
}
