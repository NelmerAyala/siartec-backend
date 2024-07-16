import { Test, TestingModule } from '@nestjs/testing';
import { RolesPrivilegesController } from './roles_privileges.controller';
import { RolesPrivilegesService } from './roles_privileges.service';

describe('RolesPrivilegesController', () => {
  let controller: RolesPrivilegesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesPrivilegesController],
      providers: [RolesPrivilegesService],
    }).compile();

    controller = module.get<RolesPrivilegesController>(RolesPrivilegesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
