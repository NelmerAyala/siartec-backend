import { Injectable } from '@nestjs/common';
import { CreateLockersPointOfSaleDto } from './dto/create-lockers_point_of_sale.dto';
import { UpdateLockersPointOfSaleDto } from './dto/update-lockers_point_of_sale.dto';

@Injectable()
export class LockersPointOfSalesService {
  create(createLockersPointOfSaleDto: CreateLockersPointOfSaleDto) {
    return 'This action adds a new lockersPointOfSale';
  }

  findAll() {
    return `This action returns all lockersPointOfSales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lockersPointOfSale`;
  }

  update(id: number, updateLockersPointOfSaleDto: UpdateLockersPointOfSaleDto) {
    return `This action updates a #${id} lockersPointOfSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} lockersPointOfSale`;
  }
}
