import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TypeOrmConfigService } from './config/database.config';
import { RolesModule } from './roles/roles.module';
import { StatusModule } from './status/status.module';
import { IsUniqueConstraint } from './utils/validation/is-unique-constraint';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    UsersModule,
    RolesModule,
    StatusModule
  ],
  providers: [IsUniqueConstraint]
})
export class AppModule { }
