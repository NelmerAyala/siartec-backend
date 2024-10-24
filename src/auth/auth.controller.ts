import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Request, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthAppGuard } from './auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthGoogleLoginDto } from './dto/google-auth.dto';
import { Response } from 'express';
import { AuthGoogleEmailDto } from './dto/google-auth-email.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-in')
  async signIn(@Body() signInDto: CreateAuthDto, @Res() response: Response) {
    const data = await this.authService.signIn(signInDto.email, signInDto.password);
    console.log("data in signIn: " + data)
    return response.status(200).json(data);
  }

  @Post('sign-in/google/email')
  async googleEmail(@Body() body: AuthGoogleEmailDto, @Res() response: Response) {
    const data = await this.authService.googleEmailLogin(body);
    console.log("data in googleEmail: " + data)
    return response.status(200).json(data);
  }

  @UseGuards(AuthAppGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('sign-in/google')
  @HttpCode(200)
  googleLogin(@Body() body: AuthGoogleLoginDto) {
    return this.authService.googleLogin(body);
  }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
