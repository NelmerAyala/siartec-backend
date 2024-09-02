import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordUserDto, UpdateUserDto } from './dto/update-user.dto';
import bcrypt from 'bcrypt';
import { sendEmail } from 'src/common/sendEmails';
import { Response } from 'express';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';

/**
 * whatever the string pass in controller decorator it will be appended to
 * API URL. to call any API from this controller you need to add prefix which is
 * passed in controller decorator.
 * in our case our base URL is http://localhost:3000/user
 */
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  /**
   * Post decorator represents method of request as we have used post decorator the method
   * of this API will be post.
   * so the API URL to create User will be
   * POST http://localhost:3000/user
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // const min = 1;
    // const max = 100000;
    // const saltRounds = Math.floor(Math.random() * (max - min) + min);
    // createUserDto.password = bcrypt.hashSync(createUserDto.password, saltRounds);
    return this.userService.createUser(createUserDto);
  }

  /**
   * we have used get decorator to get all the user's list
   * so the API URL will be
   * GET http://localhost:3000/user
   */
  @Get()
  findAll() {
    return this.userService.findAllUser();
  }

  /**
   * we have used get decorator with id param to get id from request
   * so the API URL will be
   * GET http://localhost:3000/user/:id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOneUser(+id);
  }

  /**
   * we have used patch decorator with id param to get id from request
   * so the API URL will be
   * PATCH http://localhost:3000/user/:id
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  /**
   * we have used patch decorator with id param to get id from request
   * so the API URL will be
   * PATCH http://localhost:3000/user/:id
   */
  @Put('password/:id')
  updatePassword(@Param('id') id: string, @Body() updateUserDto: UpdatePasswordUserDto, @Res() response: Response) {

    if (updateUserDto.passwordNew !== updateUserDto.passwordNewConfirm) {
      return response.status(400).json({ msg: "La nueva contraseña no coincide con su confirmación" });
    }
    if (updateUserDto.passwordCurrent === updateUserDto.passwordNewConfirm) {
      return response.status(400).json({ msg: "La nueva contraseña no puede ser igual a que está insertando como actual" });
    }
    return this.userService.updatePasswordUser(+id, updateUserDto, response);
  }

  /**
   * we have used Delete decorator with id param to get id from request
   * so the API URL will be
   * DELETE http://localhost:3000/user/:id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }


  @Post('reset-password')
  async sendEmailGet(@Body() resetPassword: ResetPasswordUserDto) {
    let req = {
      body: {
        contirbutor_email: 'NAASTECNOLOGIA@GMAIL.COM',
        contirbutor_user: 'NelmerAyala@gmail.com',
        contirbutor_names: 'Nelmer Ayala',
        contirbutor_password: 'Nelmer Ayala',
      }
    }
    return await sendEmail(req);
  }

  // @Get('data-profile')
  // getDataProfile(req: any) {
  //   return this.userService.findOneUser(req.id);
  // }
}

// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.usersService.create(createUserDto);
//   }

//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
// }
