import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionsTypesService } from './transactions_types.service';
import { CreateTransactionsTypeDto } from './dto/create-transactions_type.dto';
import { UpdateTransactionsTypeDto } from './dto/update-transactions_type.dto';

@Controller('transactions-types')
export class TransactionsTypesController {
  constructor(private readonly transactionsTypesService: TransactionsTypesService) {}

  @Post()
  create(@Body() createTransactionsTypeDto: CreateTransactionsTypeDto) {
    return this.transactionsTypesService.create(createTransactionsTypeDto);
  }

  @Get()
  findAll() {
    return this.transactionsTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionsTypeDto: UpdateTransactionsTypeDto) {
    return this.transactionsTypesService.update(+id, updateTransactionsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsTypesService.remove(+id);
  }
}
