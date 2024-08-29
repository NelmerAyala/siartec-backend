import { PartialType } from '@nestjs/mapped-types';
import { CreateAuditsDetailDto } from './create-audits_detail.dto';

export class UpdateAuditsDetailDto extends PartialType(CreateAuditsDetailDto) {}
