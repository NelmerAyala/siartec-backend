import { Injectable } from '@nestjs/common';
import { CreateRolesPrivilegeDto } from './dto/create-roles_privilege.dto';
import { UpdateRolesPrivilegeDto } from './dto/update-roles_privilege.dto';

@Injectable()
export class RolesPrivilegesService {
  create(createRolesPrivilegeDto: CreateRolesPrivilegeDto) {
    return 'This action adds a new rolesPrivilege';
  }

  findAll() {
    return `This action returns all rolesPrivileges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolesPrivilege`;
  }

  update(id: number, updateRolesPrivilegeDto: UpdateRolesPrivilegeDto) {
    return `This action updates a #${id} rolesPrivilege`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolesPrivilege`;
  }
}
