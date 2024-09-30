import { PartialType } from '@nestjs/mapped-types';
import { CreateSubentityDto } from './create-subentity.dto';

export class UpdateSubentityDto extends PartialType(CreateSubentityDto) {}
