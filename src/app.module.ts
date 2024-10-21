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
import { ProceduresModule } from './procedures/procedures.module';
import { EntitiesModule } from './entities/entities.module';
import { SubentitiesModule } from './subentities/subentities.module';
import { TaxStampsModule } from './tax_stamps/tax_stamps.module';
import { PaymentsModule } from './payments/payments.module';
import { TaxStampsPaymentsModule } from './tax_stamps_payments/tax_stamps_payments.module';
import { BanksModule } from './banks/banks.module';
import { BankAccountsModule } from './bank_accounts/bank_accounts.module';
import { TransactionsTypesModule } from './transactions_types/transactions_types.module';
import { TransactionsModule } from './transactions/transactions.module';
import { LockersModule } from './lockers/lockers.module';
import { BranchModule } from './branch/branch.module';
import { PointOfSalesModule } from './point_of_sales/point_of_sales.module';
import { LockersPointOfSalesModule } from './lockers_point_of_sales/lockers_point_of_sales.module';
import { StatesModule } from './states/states.module';
import { CountryModule } from './country/country.module';
import { TypesExternalRequestsModule } from './types_external_requests/types_external_requests.module';
import { ExternalRequestsModule } from './external_requests/external_requests.module';

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
    AuditsDetailsModule,
    ProceduresModule,
    EntitiesModule,
    SubentitiesModule,
    TaxStampsModule,
    PaymentsModule,
    TaxStampsPaymentsModule,
    BanksModule,
    BankAccountsModule,
    TransactionsTypesModule,
    TransactionsModule,
    LockersModule,
    BranchModule,
    PointOfSalesModule,
    LockersPointOfSalesModule,
    StatesModule,
    CountryModule,
    TypesExternalRequestsModule,
    ExternalRequestsModule
  ],
  providers: [IsUniqueConstraint]
})
export class AppModule { }
