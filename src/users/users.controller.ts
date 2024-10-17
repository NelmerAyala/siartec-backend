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
import * as bcrypt from 'bcryptjs';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordUserDto, UpdateUserDto } from './dto/update-user.dto';
import { sendEmail } from 'src/common/sendEmails';
import { Response } from 'express';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';
import { ContributorsTypesService } from 'src/contributors_types/contributors_types.service';

/**
 * whatever the string pass in controller decorator it will be appended to
 * API URL. to call any API from this controller you need to add prefix which is
 * passed in controller decorator.
 * in our case our base URL is http://localhost:3000/user
 */
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService, private readonly contributorstypesService: ContributorsTypesService) { }

  /**
   * Post decorator represents method of request as we have used post decorator the method
   * of this API will be post.
   * so the API URL to create User will be
   * POST http://localhost:3000/user
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() response: Response) {

    const contributor_type = await this.contributorstypesService.findOne(createUserDto.contributor_type.id);
    createUserDto.role = contributor_type.hasOwnProperty("role") ? contributor_type.role : undefined;

    if (createUserDto.role === undefined) return response.status(400).json({ msg: "El tipo de contribuyente seleccionado no tiene un rol por defecto asignado." });

    const user = await this.userService.createUser(createUserDto);
    return response.status(200).json(user)
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
  async sendEmailGet(@Body() resetPassword: ResetPasswordUserDto, @Res() response: Response) {

    let user = await this.userService.findOneUserByEmail(resetPassword.email);
    if (!user) {
      return response.status(400).json({ msg: "El correo indicado no está asociado a ninguno de nuestros contribuyentes" });
    }

    // Reset encrypt password
    let password = Math.random().toString(36).slice(-8);
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);
    user.password = hashPassword;

    let req = {
      body: {
        contirbutor_email: user.email,
        contirbutor_names: `${user.fullname}`,
        contirbutor_password: password,
        subject_email: 'Recuperación de contraseña',
      }
    }
    let resp = await sendEmail(req);
    console.log("resp")
    console.log(JSON.stringify(resp))
    resp.msg === null || resp.msg === "" ? resp.msg = 'Correo electrónico enviado satisfactoriamente' : console.log(resp.msg)
    if (resp.status === 200)
      return response.status(200).json(resp);
    else
      return response.status(400).json(resp);
  }

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
