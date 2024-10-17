import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Status) private readonly statusRepository: Repository<Status>,
  ) { }

  create(createStatusDto: CreateStatusDto) {
    return 'This action adds a new status';
  }

  findAll() {
    return `This action returns all status`;
  }

  findOne(id: number) {
    return `This action returns a #${id} status`;
  }

  findOneByCode(code: string) {
    return this.statusRepository.findBy({ code });
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }
}
