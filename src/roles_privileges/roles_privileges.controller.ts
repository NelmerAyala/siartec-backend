import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesPrivilegesService } from './roles_privileges.service';
import { CreateRolesPrivilegeDto } from './dto/create-roles_privilege.dto';
import { UpdateRolesPrivilegeDto } from './dto/update-roles_privilege.dto';

@Controller('roles-privileges')
export class RolesPrivilegesController {
  constructor(private readonly rolesPrivilegesService: RolesPrivilegesService) {}

  @Post()
  create(@Body() createRolesPrivilegeDto: CreateRolesPrivilegeDto) {
    return this.rolesPrivilegesService.create(createRolesPrivilegeDto);
  }

  @Get()
  findAll() {
    return this.rolesPrivilegesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesPrivilegesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolesPrivilegeDto: UpdateRolesPrivilegeDto) {
    return this.rolesPrivilegesService.update(+id, updateRolesPrivilegeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesPrivilegesService.remove(+id);
  }
}
