import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { SubentitiesService } from './subentities.service';
import { CreateSubentityDto } from './dto/create-subentity.dto';
import { UpdateSubentityDto } from './dto/update-subentity.dto';
import { StatusService } from 'src/status/status.service';
import { Response } from 'express';

@Controller('subentities')
export class SubentitiesController {
  constructor(private readonly subentitiesService: SubentitiesService, private readonly statusService: StatusService) { }

  @Post()
  create(@Body() createSubentityDto: CreateSubentityDto) {
    return this.subentitiesService.create(createSubentityDto);
  }

  @Get()
  findAll() {
    return this.subentitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subentitiesService.findOne(+id);
  }

  @Get('entity/:id')
  async findByEntity(@Param('id') id: number, @Res() response: Response) {

    const status_active = await this.statusService.findOneByCode(process.env.STATUS_ACTIVE);
    if (!status_active) return response.status(400).json({ msg: `No existe un estatus definido con el código *${process.env.STATUS_ACTIVE}* para definir a los registros activos.` });

    const subentities = await this.subentitiesService.findByEntity(id, status_active);
    return response.status(200).json(subentities)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubentityDto: UpdateSubentityDto) {
    return this.subentitiesService.update(+id, updateSubentityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subentitiesService.remove(+id);
  }
}
