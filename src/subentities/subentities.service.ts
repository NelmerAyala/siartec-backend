import { Injectable } from '@nestjs/common';
import { CreateSubentityDto } from './dto/create-subentity.dto';
import { UpdateSubentityDto } from './dto/update-subentity.dto';

@Injectable()
export class SubentitiesService {
  create(createSubentityDto: CreateSubentityDto) {
    return 'This action adds a new subentity';
  }

  findAll() {
    return `This action returns all subentities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subentity`;
  }

  update(id: number, updateSubentityDto: UpdateSubentityDto) {
    return `This action updates a #${id} subentity`;
  }

  remove(id: number) {
    return `This action removes a #${id} subentity`;
  }
}
