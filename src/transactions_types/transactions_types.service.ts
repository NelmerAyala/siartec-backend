import { Injectable } from '@nestjs/common';
import { CreateTransactionsTypeDto } from './dto/create-transactions_type.dto';
import { UpdateTransactionsTypeDto } from './dto/update-transactions_type.dto';

@Injectable()
export class TransactionsTypesService {
  create(createTransactionsTypeDto: CreateTransactionsTypeDto) {
    return 'This action adds a new transactionsType';
  }

  findAll() {
    return `This action returns all transactionsTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transactionsType`;
  }

  update(id: number, updateTransactionsTypeDto: UpdateTransactionsTypeDto) {
    return `This action updates a #${id} transactionsType`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactionsType`;
  }
}
