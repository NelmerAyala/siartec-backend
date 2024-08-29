import { Injectable } from '@nestjs/common';
import { CreateAuditableProcessDto } from './dto/create-auditable_process.dto';
import { UpdateAuditableProcessDto } from './dto/update-auditable_process.dto';

@Injectable()
export class AuditableProcessesService {
  create(createAuditableProcessDto: CreateAuditableProcessDto) {
    return 'This action adds a new auditableProcess';
  }

  findAll() {
    return `This action returns all auditableProcesses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditableProcess`;
  }

  update(id: number, updateAuditableProcessDto: UpdateAuditableProcessDto) {
    return `This action updates a #${id} auditableProcess`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditableProcess`;
  }
}
