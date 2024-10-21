import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StatesService } from './states.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { StatusService } from 'src/status/status.service';
import { Response } from 'express';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService, private readonly statusService: StatusService) { }

  @Post()
  create(@Body() createStateDto: CreateStateDto) {
    return this.statesService.create(createStateDto);
  }

  @Get()
  async findAll(@Res() response: Response) {
    const status_active = await this.statusService.findOneByCode(process.env.STATUS_ACTIVE);
    if (!status_active) return response.status(400).json({ msg: `No existe un estatus definido con el código *${process.env.STATUS_ACTIVE}* para definir a los registros activos.` });

    const states = await this.statesService.findAll(status_active);
    return response.status(200).json(states)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    return this.statesService.update(+id, updateStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statesService.remove(+id);
  }
}
