import { Test, TestingModule } from '@nestjs/testing';
import { AuditableProcessesService } from './auditable_processes.service';

describe('AuditableProcessesService', () => {
  let service: AuditableProcessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditableProcessesService],
    }).compile();

    service = module.get<AuditableProcessesService>(AuditableProcessesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
