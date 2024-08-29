import { Test, TestingModule } from '@nestjs/testing';
import { AuditsDetailsController } from './audits_details.controller';
import { AuditsDetailsService } from './audits_details.service';

describe('AuditsDetailsController', () => {
  let controller: AuditsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditsDetailsController],
      providers: [AuditsDetailsService],
    }).compile();

    controller = module.get<AuditsDetailsController>(AuditsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
