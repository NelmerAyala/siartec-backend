import { Module } from '@nestjs/common';
import { AuditableProcessesService } from './auditable_processes.service';
import { AuditableProcessesController } from './auditable_processes.controller';

@Module({
  controllers: [AuditableProcessesController],
  providers: [AuditableProcessesService],
})
export class AuditableProcessesModule {}
