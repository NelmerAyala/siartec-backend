import { Injectable } from '@nestjs/common';
import { CreateCalculationFactorDto } from './dto/create-calculation_factor.dto';
import { UpdateCalculationFactorDto } from './dto/update-calculation_factor.dto';

@Injectable()
export class CalculationFactorService {
  create(createCalculationFactorDto: CreateCalculationFactorDto) {
    return 'This action adds a new calculationFactor';
  }

  findAll() {
    return `This action returns all calculationFactor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calculationFactor`;
  }

  update(id: number, updateCalculationFactorDto: UpdateCalculationFactorDto) {
    return `This action updates a #${id} calculationFactor`;
  }

  remove(id: number) {
    return `This action removes a #${id} calculationFactor`;
  }
}
