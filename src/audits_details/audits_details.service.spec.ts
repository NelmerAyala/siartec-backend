import { Test, TestingModule } from '@nestjs/testing';
import { AuditsDetailsService } from './audits_details.service';

describe('AuditsDetailsService', () => {
  let service: AuditsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditsDetailsService],
    }).compile();

    service = module.get<AuditsDetailsService>(AuditsDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
