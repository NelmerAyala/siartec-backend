import { Module } from '@nestjs/common';
import { CalculationFactorService } from './calculation_factor.service';
import { CalculationFactorController } from './calculation_factor.controller';

@Module({
  controllers: [CalculationFactorController],
  providers: [CalculationFactorService],
})
export class CalculationFactorModule {}
