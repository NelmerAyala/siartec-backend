import { Test, TestingModule } from '@nestjs/testing';
import { AuditableProcessesController } from './auditable_processes.controller';
import { AuditableProcessesService } from './auditable_processes.service';

describe('AuditableProcessesController', () => {
  let controller: AuditableProcessesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditableProcessesController],
      providers: [AuditableProcessesService],
    }).compile();

    controller = module.get<AuditableProcessesController>(AuditableProcessesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
