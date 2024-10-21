import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesController } from './entities.controller';
import { Status } from 'src/status/entities/status.entity';
import { Entities } from './entities/entity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusService } from 'src/status/status.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entities, Status])],
  controllers: [EntitiesController],
  providers: [EntitiesService, StatusService],
})
export class EntitiesModule { }
