import { ConfigProps } from '../interfaces/config.interface';

export const config = (): ConfigProps => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  api: {
    apiUrl: process.env.API_URL,
    httpTimeout: 1000,
  },
  ormconfig: {
    ormDbType: process.env.ORM_DB_TYPE || 'localhost',
    ormDbEntities: process.env.ORM_DB_ENTITIES.split(",") || [],
    ormSynchronize: process.env.ORM_SYNCHRONIZE === 'true' ? true : false || true,
    ormLogging: process.env.ORM_LOGGING === 'true' ? true : false || true,

  },
  postgresqldb: {
    database: {
      // connectionString: process.env.ORD || 'mongodb://localhost:27017',
      databaseHost: process.env.DB_HOST || 'localhost',
      databasePort: parseInt(process.env.DB_PORT) || 5432,
      databasePassword: process.env.DB_PASSWORD || 'admin',
      databaseUsername: process.env.DB_USERNAME || 'postgres',
      databaseName: process.env.DB_DATABASE || 'siartecqa'
    }
  }
});




