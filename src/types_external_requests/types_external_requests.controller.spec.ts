import { Test, TestingModule } from '@nestjs/testing';
import { TypesExternalRequestsController } from './types_external_requests.controller';
import { TypesExternalRequestsService } from './types_external_requests.service';

describe('TypesExternalRequestsController', () => {
  let controller: TypesExternalRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesExternalRequestsController],
      providers: [TypesExternalRequestsService],
    }).compile();

    controller = module.get<TypesExternalRequestsController>(TypesExternalRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
