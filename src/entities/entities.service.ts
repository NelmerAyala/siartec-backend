import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entities } from './entities/entity.entity';
import { Repository } from 'typeorm';
import { Status } from 'src/status/entities/status.entity';

@Injectable()
export class EntitiesService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Entities) private readonly entityRepository: Repository<Entities>,
  ) { }

  create(createEntityDto: CreateEntityDto) {
    return 'This action adds a new entity';
  }

  findAll(status: Status[]) {
    return this.entityRepository.find({ where: { status: status["id"] } });
  }

  findOne(id: number) {
    return `This action returns a #${id} entity`;
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return `This action updates a #${id} entity`;
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
