export const dbcfg = {
  user: 'webapp',
  host: 'localhost',
  database: 'server',
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
}

export const port = parseInt(process.env.PORT || '3000', 10);