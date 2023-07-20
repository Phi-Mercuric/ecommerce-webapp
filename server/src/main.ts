import express, { json, request, response } from "express";
import users from './users/register.js';
import { initdb } from "./db.js";
import auth from "./users/auth.js";
import config from 'config';
import { initEnvVars } from './config.js';


// check to see if all required environment variables are set
initEnvVars();
initdb();

const port = parseInt(config.get('port') as string, 10);

const app = express();

app.use(express.json());
app.use("/api/users", users);
app.use('/api/users', auth);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
