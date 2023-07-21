import config from 'config'

const requiredEnvVars = ["jwtPrivateKey", "dbcfg.user", "dbcfg.host", "dbcfg.database", "dbcfg.password"]

export const initEnvVars = () => {
  const missingEnvVars = requiredEnvVars.filter((envVar) => !config.has(envVar));
  if (missingEnvVars.length !== 0)
    throw new Error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
}