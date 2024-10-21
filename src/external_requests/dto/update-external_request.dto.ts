import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalRequestDto } from './create-external_request.dto';

export class UpdateExternalRequestDto extends PartialType(CreateExternalRequestDto) {}
