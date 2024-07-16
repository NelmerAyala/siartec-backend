import { PartialType } from '@nestjs/mapped-types';
import { CreateContributorsTypeDto } from './create-contributors_type.dto';

export class UpdateContributorsTypeDto extends PartialType(CreateContributorsTypeDto) {}
