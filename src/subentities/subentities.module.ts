import { Module } from '@nestjs/common';
import { SubentitiesService } from './subentities.service';
import { SubentitiesController } from './subentities.controller';
import { Subentity } from './entities/subentity.entity';
import { Status } from 'src/status/entities/status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusService } from 'src/status/status.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subentity, Status])],
  controllers: [SubentitiesController],
  providers: [SubentitiesService, StatusService],
})
export class SubentitiesModule { }
