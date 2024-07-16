import { Module } from '@nestjs/common';
import { RolesPrivilegesService } from './roles_privileges.service';
import { RolesPrivilegesController } from './roles_privileges.controller';

@Module({
  controllers: [RolesPrivilegesController],
  providers: [RolesPrivilegesService],
})
export class RolesPrivilegesModule {}
