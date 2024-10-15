import { Module } from '@nestjs/common';
import { ContributorsTypesService } from './contributors_types.service';
import { ContributorsTypesController } from './contributors_types.controller';
import { ContributorsType } from './entities/contributors_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContributorsType]),],
  controllers: [ContributorsTypesController],
  providers: [ContributorsTypesService],
  exports: [ContributorsTypesService]
})
export class ContributorsTypesModule { }
