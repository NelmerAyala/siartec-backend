import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGoogleLoginDto } from './dto/google-auth.dto';
const { OAuth2Client } = require('google-auth-library');
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async signIn(email: string, passwordReq: string): Promise<Object> {
    const user = await this.usersService.findOneUserByEmail(email);
    // console.log(user)
    if (user === null) return new UnauthorizedException(`'${email}' not found email.`);
    if (!await bcrypt.compare(passwordReq, user?.password)) {
      return new UnauthorizedException(`Incorrect password error.`);
    }
    else {
      // const { password, ...result } = user;

      const payload = { sub: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }

  async googleLogin(body: AuthGoogleLoginDto) {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    let google_account = { email: "" };
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: body.googleTokenId,
        audience: process.env.CLIENT_ID
      });
      google_account = ticket.getPayload();
      console.log(google_account, "google_account");
    }
    await verify().catch(console.error);

    const user = await this.usersService.findOneUserByEmail(google_account?.email);

    if (user === null) return new UnauthorizedException(`'${google_account?.email}' not found email.`);

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }


  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
