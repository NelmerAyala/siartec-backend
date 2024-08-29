import { PartialType } from '@nestjs/mapped-types';
import { CreateAuditableProcessDto } from './create-auditable_process.dto';

export class UpdateAuditableProcessDto extends PartialType(CreateAuditableProcessDto) {}
