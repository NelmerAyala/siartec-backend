interface ApiConfigProps {
  apiUrl: string
  httpTimeout: number
}

interface OrmConfigProps {
  ormDbType: string
  ormDbEntities: object
  ormSynchronize: boolean
  ormLogging: boolean
}

interface PostgresqldbConfigProps {
  // connectionString: string
  databaseHost: string,
  databasePort: number,
  databasePassword: string,
  databaseUsername: string,
  databaseName: string
}


export interface ConfigProps {
  port: number
  api: ApiConfigProps
  ormconfig: OrmConfigProps
  postgresqldb: {
    database: PostgresqldbConfigProps
  }
}