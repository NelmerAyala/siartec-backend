import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxStampsService } from './tax_stamps.service';
import { CreateTaxStampDto } from './dto/create-tax_stamp.dto';
import { UpdateTaxStampDto } from './dto/update-tax_stamp.dto';

@Controller('tax-stamps')
export class TaxStampsController {
  constructor(private readonly taxStampsService: TaxStampsService) {}

  @Post()
  create(@Body() createTaxStampDto: CreateTaxStampDto) {
    return this.taxStampsService.create(createTaxStampDto);
  }

  @Get()
  findAll() {
    return this.taxStampsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxStampsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxStampDto: UpdateTaxStampDto) {
    return this.taxStampsService.update(+id, updateTaxStampDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxStampsService.remove(+id);
  }
}
