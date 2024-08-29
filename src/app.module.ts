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
import { ParishesModule } from './parishes/parishes.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { AuditsModule } from './audits/audits.module';
import { AuditableProcessesModule } from './auditable_processes/auditable_processes.module';
import { AuditsDetailsModule } from './audits_details/audits_details.module';

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
    RolesPrivilegesModule,
    ParishesModule,
    MunicipalitiesModule,
    AuditsModule,
    AuditableProcessesModule,
    AuditsDetailsModule
  ],
  providers: [IsUniqueConstraint]
})
export class AppModule { }
