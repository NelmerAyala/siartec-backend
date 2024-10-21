import { Injectable } from '@nestjs/common';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Procedure } from './entities/procedure.entity';
import { Repository } from 'typeorm';
import { Status } from 'src/status/entities/status.entity';

@Injectable()
export class ProceduresService {
  /* Here, we have used data mapper approch for this tutorial that is why we
  * injecting repository here. Another approch can be Active records.
  */
  constructor(
    @InjectRepository(Procedure) private readonly procedureRepository: Repository<Procedure>
  ) { }

  create(createProcedureDto: CreateProcedureDto) {
    return 'This action adds a new procedure';
  }

  findAll() {
    return `This action returns all procedures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} procedure`;
  }

  findByEntity(entity: number, status: Status[]) {
    return this.procedureRepository.find({ where: { entity: { id: entity }, status: status["id"] } });
  }

  update(id: number, updateProcedureDto: UpdateProcedureDto) {
    return `This action updates a #${id} procedure`;
  }

  remove(id: number) {
    return `This action removes a #${id} procedure`;
  }
}
