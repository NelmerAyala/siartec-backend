import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProceduresService } from './procedures.service';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { StatusService } from 'src/status/status.service';
import { Response } from 'express';

@Controller('procedures')
export class ProceduresController {
  constructor(private readonly proceduresService: ProceduresService, private readonly statusService: StatusService) { }

  @Post()
  create(@Body() createProcedureDto: CreateProcedureDto) {
    return this.proceduresService.create(createProcedureDto);
  }

  @Get()
  findAll() {
    return this.proceduresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proceduresService.findOne(+id);
  }

  @Get('subentity/:id')
  async findByEntity(@Param('id') id: number, @Res() response: Response) {

    const status_active = await this.statusService.findOneByCode(process.env.STATUS_ACTIVE);
    if (!status_active) return response.status(400).json({ msg: `No existe un estatus definido con el código *${process.env.STATUS_ACTIVE}* para definir a los registros activos.` });

    const procedures = await this.proceduresService.findBySubentity(id, status_active);
    return response.status(200).json(procedures)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcedureDto: UpdateProcedureDto) {
    return this.proceduresService.update(+id, updateProcedureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proceduresService.remove(+id);
  }
}
