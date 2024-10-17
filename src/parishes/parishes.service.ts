import { Injectable } from '@nestjs/common';
import { CreateParishDto } from './dto/create-parish.dto';
import { UpdateParishDto } from './dto/update-parish.dto';
import { Parishes } from './entities/parish.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipalities } from 'src/municipalities/entities/municipality.entity';

@Injectable()
export class ParishesService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Parishes) private readonly parishesRepository: Repository<Parishes>
  ) { }

  create(createParishDto: CreateParishDto) {
    return 'This action adds a new parish';
  }

  findAll() {
    return `This action returns all parishes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parish`;
  }

  findByMunicipality(id: number) {
    return this.parishesRepository.find({ where: { municipality: { id } } })
  }

  update(id: number, updateParishDto: UpdateParishDto) {
    return `This action updates a #${id} parish`;
  }

  remove(id: number) {
    return `This action removes a #${id} parish`;
  }
}
