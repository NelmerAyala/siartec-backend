import { Injectable } from '@nestjs/common';
import { CreateSubentityDto } from './dto/create-subentity.dto';
import { UpdateSubentityDto } from './dto/update-subentity.dto';
import { Subentity } from './entities/subentity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from 'src/status/entities/status.entity';

@Injectable()
export class SubentitiesService {  /**
  * Here, we have used data mapper approch for this tutorial that is why we
  * injecting repository here. Another approch can be Active records.
  */
  constructor(
    @InjectRepository(Subentity) private readonly subentityRepository: Repository<Subentity>
  ) { }


  create(createSubentityDto: CreateSubentityDto) {
    return 'This action adds a new subentity';
  }

  findAll() {
    return `This action returns all subentities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subentity`;
  }

  findByEntity(entity: number, status: Status[]) {
    return this.subentityRepository.find({ where: { entity: { id: entity }, status: status["id"] } });
  }

  update(id: number, updateSubentityDto: UpdateSubentityDto) {
    return `This action updates a #${id} subentity`;
  }

  remove(id: number) {
    return `This action removes a #${id} subentity`;
  }
}
