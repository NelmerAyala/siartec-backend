import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxStampDto } from './create-tax_stamp.dto';

export class UpdateTaxStampDto extends PartialType(CreateTaxStampDto) {}
