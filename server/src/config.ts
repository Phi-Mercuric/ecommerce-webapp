import config from 'config'

const requiredEnvVars = ["NixieNet_dbUser", "NixieNet_dbHost", "NixieNet_dbName", "NixieNet_dbPassword", "NixieNet_db_port", "NixieNet_port"]

export const initEnvVars = () => {
  const missingEnvVars = requiredEnvVars.filter((envVar) => !config.has(envVar));
  return missingEnvVars.length === 0
    ? 'All required environment variables are set.'
    : `Missing environment variables: ${missingEnvVars.join(', ')}`;


}