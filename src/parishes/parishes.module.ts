import { Module } from '@nestjs/common';
import { ParishesService } from './parishes.service';
import { ParishesController } from './parishes.controller';
import { Parishes } from './entities/parish.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parishes])],
  controllers: [ParishesController],
  providers: [ParishesService],
  exports: [ParishesService],
})
export class ParishesModule { }
