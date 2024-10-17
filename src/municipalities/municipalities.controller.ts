import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { StatusService } from 'src/status/status.service';
import { response, Response } from 'express';


@Controller('municipalities')
export class MunicipalitiesController {
  constructor(private readonly municipalitiesService: MunicipalitiesService, private readonly statusService: StatusService) { }

  @Post()
  create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
    return this.municipalitiesService.create(createMunicipalityDto);
  }

  @Get()
  async findAll(@Res() response: Response) {
    const status_active = await this.statusService.findOneByCode('ACTIVE');
    if (!status_active) return response.status(400).json({ msg: "El tipo de contribuyente seleccionado no tiene un rol por defecto asignado." });

    const municipalities = await this.municipalitiesService.findAll(status_active);
    return response.status(200).json(municipalities)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.municipalitiesService.findOne(+id);
  }

  @Get('state/:id')
  async findByState(@Param('id') id: number, @Res() response: Response) {
    const STATUS = 'ACTIVE';
    const status_active = await this.statusService.findOneByCode(STATUS);
    if (!status_active) return response.status(400).json({ msg: `No existe un estatus ${STATUS}.` });

    const municipalities = await this.municipalitiesService.findByState(id, status_active);
    return response.status(200).json(municipalities)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMunicipalityDto: UpdateMunicipalityDto) {
    return this.municipalitiesService.update(+id, updateMunicipalityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.municipalitiesService.remove(+id);
  }
}
