import { Module } from '@nestjs/common';
import { ContributorsTypesService } from './contributors_types.service';
import { ContributorsTypesController } from './contributors_types.controller';
import { ContributorsType } from './entities/contributors_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/status/entities/status.entity';
import { StatusService } from 'src/status/status.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContributorsType, Status]),],
  controllers: [ContributorsTypesController],
  providers: [ContributorsTypesService, StatusService],
  exports: [ContributorsTypesService]
})
export class ContributorsTypesModule { }
