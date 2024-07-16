import { Injectable } from '@nestjs/common';
import { CreateContributorsTypeDto } from './dto/create-contributors_type.dto';
import { UpdateContributorsTypeDto } from './dto/update-contributors_type.dto';

@Injectable()
export class ContributorsTypesService {
  create(createContributorsTypeDto: CreateContributorsTypeDto) {
    return 'This action adds a new contributorsType';
  }

  findAll() {
    return `This action returns all contributorsTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contributorsType`;
  }

  update(id: number, updateContributorsTypeDto: UpdateContributorsTypeDto) {
    return `This action updates a #${id} contributorsType`;
  }

  remove(id: number) {
    return `This action removes a #${id} contributorsType`;
  }
}
