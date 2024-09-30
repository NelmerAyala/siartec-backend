import { Injectable } from '@nestjs/common';
import { CreateTaxStampDto } from './dto/create-tax_stamp.dto';
import { UpdateTaxStampDto } from './dto/update-tax_stamp.dto';

@Injectable()
export class TaxStampsService {
  create(createTaxStampDto: CreateTaxStampDto) {
    return 'This action adds a new taxStamp';
  }

  findAll() {
    return `This action returns all taxStamps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxStamp`;
  }

  update(id: number, updateTaxStampDto: UpdateTaxStampDto) {
    return `This action updates a #${id} taxStamp`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxStamp`;
  }
}
