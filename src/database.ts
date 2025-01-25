import 'dotenv/config'
import { knex as setupKnes, Knex } from 'knex'
import { env } from './env'

if (!process.env.DATABASE_URL) {
  throw new Error('PORNO GAY BEM VINDO AO SITE PORNO GAY')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnes(config)
