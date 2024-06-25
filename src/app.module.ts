import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TypeOrmConfigService } from './config/database.config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { StatusModule } from './status/status.module';


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
    // TypeOrmModule.forRoot({
    //   type:
    //     host: 'localhost',
    //   port: 5432,
    //   password: 'simform',
    //   username: 'postgres',
    //   entities: [],
    //   database: 'pgWithNest',
    //   synchronize: true,
    //   logging: true,
    // }),
    UsersModule,
    RolesModule,
    StatusModule
  ],
})
export class AppModule { }
