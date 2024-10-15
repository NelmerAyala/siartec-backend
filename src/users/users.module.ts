import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContributorsTypesController } from 'src/contributors_types/contributors_types.controller';
import { ContributorsType } from 'src/contributors_types/entities/contributors_type.entity';
import { ContributorsTypesService } from 'src/contributors_types/contributors_types.service';
@Module({
  imports: [TypeOrmModule.forFeature([Users, ContributorsType])],
  controllers: [UsersController],
  providers: [UsersService, ContributorsTypesService],
  exports: [UsersService]
})
export class UsersModule { }
