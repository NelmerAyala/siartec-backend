import { IsNotEmpty, IsString } from "class-validator";

export class AuthGoogleLoginDto {
  @IsNotEmpty()
  @IsString()
  googleTokenId: string;
}