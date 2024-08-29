import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditableProcessesService } from './auditable_processes.service';
import { CreateAuditableProcessDto } from './dto/create-auditable_process.dto';
import { UpdateAuditableProcessDto } from './dto/update-auditable_process.dto';

@Controller('auditable-processes')
export class AuditableProcessesController {
  constructor(private readonly auditableProcessesService: AuditableProcessesService) {}

  @Post()
  create(@Body() createAuditableProcessDto: CreateAuditableProcessDto) {
    return this.auditableProcessesService.create(createAuditableProcessDto);
  }

  @Get()
  findAll() {
    return this.auditableProcessesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditableProcessesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditableProcessDto: UpdateAuditableProcessDto) {
    return this.auditableProcessesService.update(+id, updateAuditableProcessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditableProcessesService.remove(+id);
  }
}
