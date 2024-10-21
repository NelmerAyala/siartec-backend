import { Test, TestingModule } from '@nestjs/testing';
import { ExternalRequestsService } from './external_requests.service';

describe('ExternalRequestsService', () => {
  let service: ExternalRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalRequestsService],
    }).compile();

    service = module.get<ExternalRequestsService>(ExternalRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
