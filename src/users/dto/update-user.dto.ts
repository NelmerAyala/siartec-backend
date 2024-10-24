import {
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsTimeZone,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsUnique } from '../../utils/validation/is-unique';
import { Users } from '../entities/user.entity';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[0-9A-Za-zd@$!%*?&]{8,20}$/;

// export class UpdateUserDto extends PartialType(CreateUserDto) { }
// export class UpdatePasswordUserDto extends PartialType(CreateUserDto) { }

export class UpdateUserDto {
  @IsString()
  @MinLength(2, { message: 'Firstname must have atleast 2 characters.' })
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @MinLength(2, { message: 'Lastname must have atleast 2 characters.' })
  @IsNotEmpty()
  lastname: string;

  @IsUnique({ tableName: 'users', column: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(1, { message: 'Identity document letter must have a maximum of 1 character.' })
  @IsNotEmpty()
  identity_document_letter: string;

  @IsString()
  @MinLength(7, { message: 'Identity document must have atleast 7 characters.' })
  @IsNotEmpty()
  identity_document: string;

  @IsDateString()
  @IsNotEmpty()
  @IsOptional()
  birthdate: string;

  @IsDateString()
  @IsNotEmpty()
  @IsOptional()
  constitution_date: string;

  @MinLength(5, { message: 'address must have atleast 5 characters.' })
  @MaxLength(255, { message: 'address must have a maximum of 255 characters.' })
  @IsNotEmpty()
  address: string;

  @IsPhoneNumber()
  @Length(15, 15, { message: 'phone_number must have 15 characters.' })
  @IsNotEmpty()
  phone_number: string;

}

export class UpdatePasswordUserDto {

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters, 
    at least one uppercase letter, 
    one lowercase letter, 
    one number and 
    one special character`,
  })
  password: string;

}