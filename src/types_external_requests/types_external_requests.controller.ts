import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesExternalRequestsService } from './types_external_requests.service';
import { CreateTypesExternalRequestDto } from './dto/create-types_external_request.dto';
import { UpdateTypesExternalRequestDto } from './dto/update-types_external_request.dto';

@Controller('types-external-requests')
export class TypesExternalRequestsController {
  constructor(private readonly typesExternalRequestsService: TypesExternalRequestsService) {}

  @Post()
  create(@Body() createTypesExternalRequestDto: CreateTypesExternalRequestDto) {
    return this.typesExternalRequestsService.create(createTypesExternalRequestDto);
  }

  @Get()
  findAll() {
    return this.typesExternalRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesExternalRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypesExternalRequestDto: UpdateTypesExternalRequestDto) {
    return this.typesExternalRequestsService.update(+id, updateTypesExternalRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesExternalRequestsService.remove(+id);
  }
}
