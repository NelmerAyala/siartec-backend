import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionsTypeDto } from './create-transactions_type.dto';

export class UpdateTransactionsTypeDto extends PartialType(CreateTransactionsTypeDto) {}
