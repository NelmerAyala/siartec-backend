import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGoogleLoginDto } from './dto/google-auth.dto';
import { AuthGoogleEmailDto } from './dto/google-auth-email.dto';
import { jwtConstants } from './constants';
const { OAuth2Client } = require('google-auth-library');
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async signIn(email: string, passwordReq: string): Promise<Object> {
    const getUser = await this.usersService.findOneUserByEmail(email);
    if (getUser === null) return new UnauthorizedException(`'${email}' correo electrónico no encontrado.`);
    const { password, ...user } = getUser;

    if (!await bcrypt.compare(passwordReq, password)) {
      return new UnauthorizedException(`Error - Contraseña incorrecta.`);
    }
    else {
      const payload = { sub: user.id, email: user.email };
      const resp = {
        user,
        access_token: await this.jwtService.signAsync(payload, { secret: jwtConstants.secret }),
      }
      return resp;
    }
  }

  async googleLogin(body: AuthGoogleLoginDto) {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    let google_account: { email: string };
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: body.googleTokenId,
        audience: process.env.CLIENT_ID
      });
      google_account = ticket.getPayload();

    }
    await verify().catch(console.error);

    const user = await this.usersService.findOneUserByEmail(google_account?.email);

    if (user === null) return new UnauthorizedException(`'${google_account?.email}' correo electrónico no encontrado.`);

    const payload = { sub: user.id, email: user.email };
    const resp = {
      user,
      access_token: await this.jwtService.signAsync(payload),
    }
    return resp;
  }

  async googleEmailLogin(body: AuthGoogleEmailDto) {
    const getUser = await this.usersService.findOneUserByEmail(body.email);

    if (getUser === null) return new UnauthorizedException(`'${body.email}' correo electrónico no encontrado.`);
    const { password, ...user } = getUser;

    const payload = { sub: user.id, email: user.email };
    const resp = {
      user,
      access_token: await this.jwtService.signAsync(payload),
    }
    return resp;
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
