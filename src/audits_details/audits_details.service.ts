import { Injectable } from '@nestjs/common';
import { CreateAuditsDetailDto } from './dto/create-audits_detail.dto';
import { UpdateAuditsDetailDto } from './dto/update-audits_detail.dto';

@Injectable()
export class AuditsDetailsService {
  create(createAuditsDetailDto: CreateAuditsDetailDto) {
    return 'This action adds a new auditsDetail';
  }

  findAll() {
    return `This action returns all auditsDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditsDetail`;
  }

  update(id: number, updateAuditsDetailDto: UpdateAuditsDetailDto) {
    return `This action updates a #${id} auditsDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditsDetail`;
  }
}
