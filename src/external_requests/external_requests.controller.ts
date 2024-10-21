import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExternalRequestsService } from './external_requests.service';
import { CreateExternalRequestDto } from './dto/create-external_request.dto';
import { UpdateExternalRequestDto } from './dto/update-external_request.dto';

@Controller('external-requests')
export class ExternalRequestsController {
  constructor(private readonly externalRequestsService: ExternalRequestsService) {}

  @Post()
  create(@Body() createExternalRequestDto: CreateExternalRequestDto) {
    return this.externalRequestsService.create(createExternalRequestDto);
  }

  @Get()
  findAll() {
    return this.externalRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.externalRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExternalRequestDto: UpdateExternalRequestDto) {
    return this.externalRequestsService.update(+id, updateExternalRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.externalRequestsService.remove(+id);
  }
}
