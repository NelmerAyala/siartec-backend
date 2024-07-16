import { Test, TestingModule } from '@nestjs/testing';
import { RolesPrivilegesService } from './roles_privileges.service';

describe('RolesPrivilegesService', () => {
  let service: RolesPrivilegesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesPrivilegesService],
    }).compile();

    service = module.get<RolesPrivilegesService>(RolesPrivilegesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
