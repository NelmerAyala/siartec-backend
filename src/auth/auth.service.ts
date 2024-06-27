import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }

  async signIn(email: string, pass: string): Promise<Object> {
    const user = await this.usersService.findOneUserByEmail(email);

    if (bcrypt.compare(user?.password, pass)) {
      const { password, ...result } = user;
      // TODO: Generate a JWT and return it here
      // instead of the user object
      return result;
    }
    // else {
    //   // Handle error
    //   console.log('Error comparing passwords:', err);
    //   return { "Error": "" };
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
