import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ContributorsTypesService } from './contributors_types.service';
import { CreateContributorsTypeDto } from './dto/create-contributors_type.dto';
import { UpdateContributorsTypeDto } from './dto/update-contributors_type.dto';
import { Response } from 'express';
import { StatusService } from 'src/status/status.service';

@Controller('contributors-types')
export class ContributorsTypesController {
  constructor(private readonly contributorsTypesService: ContributorsTypesService, private readonly statusService: StatusService) { }

  @Post()
  create(@Body() createContributorsTypeDto: CreateContributorsTypeDto) {
    return this.contributorsTypesService.create(createContributorsTypeDto);
  }

  @Get()
  async findAll(@Res() response: Response) {
    const status_active = await this.statusService.findOneByCode(process.env.STATUS_ACTIVE);
    if (!status_active) return response.status(400).json({ msg: `No existe un estatus definido con el código *${process.env.STATUS_ACTIVE}* para definir a los registros activos.` });

    const contributors_type = await this.contributorsTypesService.findAll(status_active);
    return response.status(200).json(contributors_type)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contributorsTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContributorsTypeDto: UpdateContributorsTypeDto) {
    return this.contributorsTypesService.update(+id, updateContributorsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contributorsTypesService.remove(+id);
  }
}
