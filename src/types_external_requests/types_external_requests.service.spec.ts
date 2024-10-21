import { Test, TestingModule } from '@nestjs/testing';
import { TypesExternalRequestsService } from './types_external_requests.service';

describe('TypesExternalRequestsService', () => {
  let service: TypesExternalRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesExternalRequestsService],
    }).compile();

    service = module.get<TypesExternalRequestsService>(TypesExternalRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
