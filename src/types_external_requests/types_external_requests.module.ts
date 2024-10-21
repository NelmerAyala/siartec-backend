import { Module } from '@nestjs/common';
import { TypesExternalRequestsService } from './types_external_requests.service';
import { TypesExternalRequestsController } from './types_external_requests.controller';

@Module({
  controllers: [TypesExternalRequestsController],
  providers: [TypesExternalRequestsService],
})
export class TypesExternalRequestsModule {}
