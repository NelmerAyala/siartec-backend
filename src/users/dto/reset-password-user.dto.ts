import {
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsTimeZone,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsUnique } from '../../utils/validation/is-unique';
import { ContributorsType } from 'src/contributors_types/entities/contributors_type.entity';
import { Role } from 'src/roles/entities/role.entity';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;


export class ResetPasswordUserDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;
}