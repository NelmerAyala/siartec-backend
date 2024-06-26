import * as bcrypt from 'bcrypt';
import {
  IsAlphanumeric,
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  IsTimeZone,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsUnique } from '../../utils/validation/is-unique';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;


export class CreateUserDto {
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

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters, 
    at least one uppercase letter, 
    one lowercase letter, 
    one number and 
    one special character`,
  })
  password: string;

  @IsString()
  @MaxLength(1, { message: 'Identity document letter must have a maximum of 1 character.' })
  @IsNotEmpty()
  identity_document_letter: string;

  @IsString()
  @MaxLength(7, { message: 'Identity document must have atleast 7 characters.' })
  @IsNotEmpty()
  identity_document: string;

  @IsDate()
  birthdate: string;

  @IsDate()
  constitution_date: string;

  @IsAlphanumeric()
  @MinLength(5, { message: 'address must have atleast 5 characters.' })
  @MaxLength(255, { message: 'address must have a maximum of 255 characters.' })
  @IsNotEmpty()
  address: string;

  @IsAlphanumeric()
  @Length(15, 15, { message: 'phone_number must have 15 characters.' })
  @IsNotEmpty()
  phone_number: string;
  // +58 414 0000000

  @IsTimeZone()
  last_connection: Date;


  /* 
    Triggers Before and After 
  */


  // @IsInt()
  // age: number;

  // @IsString()
  // @IsEnum(['f', 'm', 'u'])
  // gender: string;
}