import express, { json, request, response } from "express";
import users from './users/register.js';
import { initdb } from "./db.js";
import { port } from "./config.js";
import auth from "./users/auth.js";

initdb();

const app = express();

app.use(express.json());
app.use("/api/users", users);
app.use('/api/users', auth);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
