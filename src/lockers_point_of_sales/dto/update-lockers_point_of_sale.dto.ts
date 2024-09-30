import { PartialType } from '@nestjs/mapped-types';
import { CreateLockersPointOfSaleDto } from './create-lockers_point_of_sale.dto';

export class UpdateLockersPointOfSaleDto extends PartialType(CreateLockersPointOfSaleDto) {}
