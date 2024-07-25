import { ConfigProps } from '../interfaces/config.interface';

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  api: {
    apiUrl: process.env.API_URL,
    httpTimeout: 1000,
  },
  ormconfig: {
    ormDbType: process.env.ORM_DB_TYPE || 'postgres',
    ormDbEntities: process.env.ORM_DB_ENTITIES.split(",") || [],
    ormSynchronize: process.env.ORM_SYNCHRONIZE === 'true' ? true : false || true,
    ormLogging: process.env.ORM_LOGGING === 'true' ? true : false || true,

  },
  postgresqldb: {
    database: {
      databaseHost: process.env.DB_HOST || 'siartec-db',
      databasePort: parseInt(process.env.DB_PORT) || 5433,
      databasePassword: process.env.DB_PASSWORD || '514RT3C',
      databaseUsername: process.env.DB_USERNAME || 'siartecapp',
      databaseName: process.env.DB_DATABASE || 'siartec'
    }
  }
});




