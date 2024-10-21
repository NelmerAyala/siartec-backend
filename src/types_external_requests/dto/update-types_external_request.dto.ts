import { PartialType } from '@nestjs/mapped-types';
import { CreateTypesExternalRequestDto } from './create-types_external_request.dto';

export class UpdateTypesExternalRequestDto extends PartialType(CreateTypesExternalRequestDto) {}
