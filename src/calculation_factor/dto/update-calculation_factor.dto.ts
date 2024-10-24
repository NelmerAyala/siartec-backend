import { PartialType } from '@nestjs/mapped-types';
import { CreateCalculationFactorDto } from './create-calculation_factor.dto';

export class UpdateCalculationFactorDto extends PartialType(CreateCalculationFactorDto) {}
