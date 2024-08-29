import { Module } from '@nestjs/common';
import { AuditsDetailsService } from './audits_details.service';
import { AuditsDetailsController } from './audits_details.controller';

@Module({
  controllers: [AuditsDetailsController],
  providers: [AuditsDetailsService],
})
export class AuditsDetailsModule {}
