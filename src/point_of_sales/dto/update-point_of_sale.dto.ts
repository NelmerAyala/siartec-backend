import { PartialType } from '@nestjs/mapped-types';
import { CreatePointOfSaleDto } from './create-point_of_sale.dto';

export class UpdatePointOfSaleDto extends PartialType(CreatePointOfSaleDto) {}
