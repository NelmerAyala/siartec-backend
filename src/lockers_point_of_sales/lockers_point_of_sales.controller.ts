import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LockersPointOfSalesService } from './lockers_point_of_sales.service';
import { CreateLockersPointOfSaleDto } from './dto/create-lockers_point_of_sale.dto';
import { UpdateLockersPointOfSaleDto } from './dto/update-lockers_point_of_sale.dto';

@Controller('lockers-point-of-sales')
export class LockersPointOfSalesController {
  constructor(private readonly lockersPointOfSalesService: LockersPointOfSalesService) {}

  @Post()
  create(@Body() createLockersPointOfSaleDto: CreateLockersPointOfSaleDto) {
    return this.lockersPointOfSalesService.create(createLockersPointOfSaleDto);
  }

  @Get()
  findAll() {
    return this.lockersPointOfSalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lockersPointOfSalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLockersPointOfSaleDto: UpdateLockersPointOfSaleDto) {
    return this.lockersPointOfSalesService.update(+id, updateLockersPointOfSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lockersPointOfSalesService.remove(+id);
  }
}
