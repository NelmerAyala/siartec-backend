import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditsDetailsService } from './audits_details.service';
import { CreateAuditsDetailDto } from './dto/create-audits_detail.dto';
import { UpdateAuditsDetailDto } from './dto/update-audits_detail.dto';

@Controller('audits-details')
export class AuditsDetailsController {
  constructor(private readonly auditsDetailsService: AuditsDetailsService) {}

  @Post()
  create(@Body() createAuditsDetailDto: CreateAuditsDetailDto) {
    return this.auditsDetailsService.create(createAuditsDetailDto);
  }

  @Get()
  findAll() {
    return this.auditsDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditsDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditsDetailDto: UpdateAuditsDetailDto) {
    return this.auditsDetailsService.update(+id, updateAuditsDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditsDetailsService.remove(+id);
  }
}
