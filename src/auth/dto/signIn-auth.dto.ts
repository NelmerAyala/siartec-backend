import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class SignInAuthDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}