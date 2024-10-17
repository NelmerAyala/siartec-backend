import { Module } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { MunicipalitiesController } from './municipalities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipalities } from './entities/municipality.entity';
import { StatusService } from 'src/status/status.service';
import { Status } from 'src/status/entities/status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Municipalities, Status])],
  controllers: [MunicipalitiesController],
  providers: [MunicipalitiesService, StatusService],
})
export class MunicipalitiesModule { }
