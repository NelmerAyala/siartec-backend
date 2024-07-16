import { Module } from '@nestjs/common';
import { ContributorsTypesService } from './contributors_types.service';
import { ContributorsTypesController } from './contributors_types.controller';

@Module({
  controllers: [ContributorsTypesController],
  providers: [ContributorsTypesService],
})
export class ContributorsTypesModule {}
