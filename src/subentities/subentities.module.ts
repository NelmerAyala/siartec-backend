import { Module } from '@nestjs/common';
import { SubentitiesService } from './subentities.service';
import { SubentitiesController } from './subentities.controller';

@Module({
  controllers: [SubentitiesController],
  providers: [SubentitiesService],
})
export class SubentitiesModule {}
