import { IsNotEmpty, IsString } from "class-validator";

export class AuthGoogleEmailDto {
  @IsNotEmpty()
  @IsString()
  email: string;
}