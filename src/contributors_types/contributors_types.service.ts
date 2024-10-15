import { Injectable } from '@nestjs/common';
import { CreateContributorsTypeDto } from './dto/create-contributors_type.dto';
import { UpdateContributorsTypeDto } from './dto/update-contributors_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContributorsType } from './entities/contributors_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContributorsTypesService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(ContributorsType) private readonly contributorTypeRepository: Repository<ContributorsType>,
  ) { }
  create(createContributorsTypeDto: CreateContributorsTypeDto) {
    return 'This action adds a new contributorsType';
  }

  findAll() {
    return `This action returns all contributorsTypes`;
  }

  findOne(id: number) {
    return this.contributorTypeRepository.findOne({ where: { id }, relations: { role: true } });
  }

  update(id: number, updateContributorsTypeDto: UpdateContributorsTypeDto) {
    return `This action updates a #${id} contributorsType`;
  }

  remove(id: number) {
    return `This action removes a #${id} contributorsType`;
  }
}
