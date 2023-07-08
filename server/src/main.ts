import express, { json, request, response } from "express";
import { Router } from "express";
import users from './users/users.js';
import { initdb } from "./db.js";
import { port } from "./config.js";

initdb();

const app = express();

app.use(express.json());
app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
