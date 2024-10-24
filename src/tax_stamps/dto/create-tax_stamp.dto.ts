import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
  } from 'class-validator';
import { CalculationFactor } from 'src/calculation_factor/entities/calculation_factor.entity';
  
  export class CreateTaxStampDto {

    @MinLength(5,{ message: 'Code must have atleast 5 characters.' })
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    calculation_factor: CalculationFactor

    /* 
      Triggers Before and After 
    */

  }