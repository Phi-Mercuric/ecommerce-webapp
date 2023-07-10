import { Response, request, Router } from 'express';
import { authSchema } from '../models/user.js';
import { db } from '../db.js';
import * as argon2 from 'argon2';
import debug from 'debug';

const dbg = debug('server:users');
const router = Router();

router.post('/auth', async (req, res) => {
  dbg("User Authentication ", req.body);
  const { error } = authSchema.validate(req.body);
  if (error) {
    dbg("\tValidation error: ", error, "\n}");
    return res.status(400).send(error.details[0].message);
  }

  const { username, password } = req.body;

  const emails = await db.query('SELECT password FROM users WHERE username = $1 OR email = $1', [username]);
  if (emails.rows.length != 1) {
    dbg("\tEmail doesn't exist\n}")
    return res.status(400).send('Email doesn\'t exist');
  }
  if (!await argon2.verify(emails.rows[0].password, password)) {
    dbg("\tWrong password\n}")
    return res.status(400).send('Wrong password');
  }



});

export default router;