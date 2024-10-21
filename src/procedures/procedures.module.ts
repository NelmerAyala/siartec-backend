import { Module } from '@nestjs/common';
import { ProceduresService } from './procedures.service';
import { ProceduresController } from './procedures.controller';
import { Procedure } from './entities/procedure.entity';
import { Status } from 'src/status/entities/status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusService } from 'src/status/status.service';

@Module({
  imports: [TypeOrmModule.forFeature([Procedure, Status])],
  controllers: [ProceduresController],
  providers: [ProceduresService, StatusService],
})
export class ProceduresModule { }
