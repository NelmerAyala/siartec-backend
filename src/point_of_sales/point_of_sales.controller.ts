import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PointOfSalesService } from './point_of_sales.service';
import { CreatePointOfSaleDto } from './dto/create-point_of_sale.dto';
import { UpdatePointOfSaleDto } from './dto/update-point_of_sale.dto';

@Controller('point-of-sales')
export class PointOfSalesController {
  constructor(private readonly pointOfSalesService: PointOfSalesService) {}

  @Post()
  create(@Body() createPointOfSaleDto: CreatePointOfSaleDto) {
    return this.pointOfSalesService.create(createPointOfSaleDto);
  }

  @Get()
  findAll() {
    return this.pointOfSalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pointOfSalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePointOfSaleDto: UpdatePointOfSaleDto) {
    return this.pointOfSalesService.update(+id, updatePointOfSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointOfSalesService.remove(+id);
  }
}
