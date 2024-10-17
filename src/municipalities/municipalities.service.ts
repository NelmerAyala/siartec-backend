import { Injectable } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipalities } from './entities/municipality.entity';
import { Code, Repository } from 'typeorm';
import { Status } from 'src/status/entities/status.entity';
import { State } from 'src/states/entities/state.entity';

@Injectable()
export class MunicipalitiesService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Municipalities) private readonly municipalityRepository: Repository<Municipalities>,
    // @InjectRepository(Status) private readonly statusRepository: Repository<Status>,
  ) { }

  create(createMunicipalityDto: CreateMunicipalityDto) {
    return 'This action adds a new municipality';
  }

  findAll(status: Status[]) {
    return this.municipalityRepository.find({ where: { status: status["id"] } });
  }

  findByState(state: number, status: Status[]) {
    return this.municipalityRepository.find({ where: { state: { id: state }, status: status["id"] } });
  }


  findOne(id: number) {
    return `This action returns a #${id} municipality`;
  }

  update(id: number, updateMunicipalityDto: UpdateMunicipalityDto) {
    return `This action updates a #${id} municipality`;
  }

  remove(id: number) {
    return `This action removes a #${id} municipality`;
  }
}
