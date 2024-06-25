import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('postgresqldb.database.databaseHost'),
      port: +this.configService.get<number>('postgresqldb.database.databasePort'),
      username: this.configService.get<string>('postgresqldb.database.databaseUsername'),
      password: this.configService.get<string>('postgresqldb.database.databasePassword'),
      database: this.configService.get<string>('postgresqldb.database.databaseName'),
      entities: ['dist/**/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: true,
    };
  }
}
