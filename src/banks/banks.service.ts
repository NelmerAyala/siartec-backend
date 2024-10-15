import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from './entities/bank.entity';
import { IsNull, Not, Repository } from 'typeorm';

@Injectable()
export class BanksService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Bank) private readonly bankRepository: Repository<Bank>,
  ) { }
  
  
  create(createBankDto: CreateBankDto) {
    return 'This action adds a new bank';
  }

  findAll() {
    return this.bankRepository.find();
  }

  findAllWithCodeBank() {
    return this.bankRepository.find({where: {code_bank: Not(IsNull()) }, order: {code_bank:"ASC" }});
  }

  findOne(id: number) {
    return `This action returns a #${id} bank`;
  }

  update(id: number, updateBankDto: UpdateBankDto) {
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }
}
