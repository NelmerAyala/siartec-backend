import { Injectable } from '@nestjs/common';
import { CreatePointOfSaleDto } from './dto/create-point_of_sale.dto';
import { UpdatePointOfSaleDto } from './dto/update-point_of_sale.dto';

@Injectable()
export class PointOfSalesService {
  create(createPointOfSaleDto: CreatePointOfSaleDto) {
    return 'This action adds a new pointOfSale';
  }

  findAll() {
    return `This action returns all pointOfSales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pointOfSale`;
  }

  update(id: number, updatePointOfSaleDto: UpdatePointOfSaleDto) {
    return `This action updates a #${id} pointOfSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} pointOfSale`;
  }
}
