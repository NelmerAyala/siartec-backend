import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxStampsPaymentsService } from './tax_stamps_payments.service';
import { CreateTaxStampsPaymentDto } from './dto/create-tax_stamps_payment.dto';
import { UpdateTaxStampsPaymentDto } from './dto/update-tax_stamps_payment.dto';

@Controller('tax-stamps-payments')
export class TaxStampsPaymentsController {
  constructor(private readonly taxStampsPaymentsService: TaxStampsPaymentsService) {}

  @Post()
  create(@Body() createTaxStampsPaymentDto: CreateTaxStampsPaymentDto) {
    return this.taxStampsPaymentsService.create(createTaxStampsPaymentDto);
  }

  @Get()
  findAll() {
    return this.taxStampsPaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxStampsPaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxStampsPaymentDto: UpdateTaxStampsPaymentDto) {
    return this.taxStampsPaymentsService.update(+id, updateTaxStampsPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxStampsPaymentsService.remove(+id);
  }
}
