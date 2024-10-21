import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { Status } from 'src/status/entities/status.entity';
import { State } from './entities/state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusService } from 'src/status/status.service';

@Module({
  imports: [TypeOrmModule.forFeature([State, Status])],
  controllers: [StatesController],
  providers: [StatesService, StatusService],
})
export class StatesModule { }
