import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesPrivilegeDto } from './create-roles_privilege.dto';

export class UpdateRolesPrivilegeDto extends PartialType(CreateRolesPrivilegeDto) {}
