import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubentitiesService } from './subentities.service';
import { CreateSubentityDto } from './dto/create-subentity.dto';
import { UpdateSubentityDto } from './dto/update-subentity.dto';

@Controller('subentities')
export class SubentitiesController {
  constructor(private readonly subentitiesService: SubentitiesService) {}

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubentityDto: UpdateSubentityDto) {
    return this.subentitiesService.update(+id, updateSubentityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subentitiesService.remove(+id);
  }
}
