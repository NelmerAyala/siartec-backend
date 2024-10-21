import { Module } from '@nestjs/common';
import { ExternalRequestsService } from './external_requests.service';
import { ExternalRequestsController } from './external_requests.controller';

@Module({
  controllers: [ExternalRequestsController],
  providers: [ExternalRequestsService],
})
export class ExternalRequestsModule {}
