import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TypeOrmConfigService } from './config/database.config';
import { RolesModule } from './roles/roles.module';
import { StatusModule } from './status/status.module';
import { IsUniqueConstraint } from './utils/validation/is-unique-constraint';
import { AuthModule } from './auth/auth.module';
import { ContributorsTypesModule } from './contributors_types/contributors_types.module';
import { PrivilegesModule } from './privileges/privileges.module';
import { RolesPrivilegesModule } from './roles_privileges/roles_privileges.module';

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
    StatusModule,
    AuthModule,
    ContributorsTypesModule,
    PrivilegesModule,
    RolesPrivilegesModule
  ],
  providers: [IsUniqueConstraint]
})
export class AppModule { }
