import { Module } from '@nestjs/common';
import { TransactionsTypesService } from './transactions_types.service';
import { TransactionsTypesController } from './transactions_types.controller';

@Module({
  controllers: [TransactionsTypesController],
  providers: [TransactionsTypesService],
})
export class TransactionsTypesModule {}
