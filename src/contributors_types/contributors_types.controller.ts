import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContributorsTypesService } from './contributors_types.service';
import { CreateContributorsTypeDto } from './dto/create-contributors_type.dto';
import { UpdateContributorsTypeDto } from './dto/update-contributors_type.dto';

@Controller('contributors-types')
export class ContributorsTypesController {
  constructor(private readonly contributorsTypesService: ContributorsTypesService) {}

  @Post()
  create(@Body() createContributorsTypeDto: CreateContributorsTypeDto) {
    return this.contributorsTypesService.create(createContributorsTypeDto);
  }

  @Get()
  findAll() {
    return this.contributorsTypesService.findAll();
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
