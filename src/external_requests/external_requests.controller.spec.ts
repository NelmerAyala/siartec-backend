import { Test, TestingModule } from '@nestjs/testing';
import { ExternalRequestsController } from './external_requests.controller';
import { ExternalRequestsService } from './external_requests.service';

describe('ExternalRequestsController', () => {
  let controller: ExternalRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalRequestsController],
      providers: [ExternalRequestsService],
    }).compile();

    controller = module.get<ExternalRequestsController>(ExternalRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
