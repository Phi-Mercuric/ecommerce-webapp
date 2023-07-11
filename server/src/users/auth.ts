import { Response, request, Router } from 'express';
import { authSchema } from '../models/user.js';
import { db } from '../db.js';
import * as argon2 from 'argon2';
import debug from 'debug';

const dbg = debug('server:users');
const router = Router();

router.post('/auth', async (req, res) => {
  dbg("User Authentication ", req.body);

  // --- Validation ---
  const { error } = authSchema.validate(req.body);
  if (error) {
    dbg("\tValidation error: ", error, "\n}");
    if (error.details[0].type === 'string.email')                                   // The only possible error for email is the format.
      return res.status(461).send(error.details[0].message);
    else                                                                            // The only other possible errors is for username.
      return res.status(462).send(error.details[0].message);
  }

  // --- Database ---
  const { inpUsername: username, password } = req.body;

  // - Username/Email -
  // "username" is what the user entered, it could be either an email or a username (but user is prompted for username)
  const dbRes = await db.query('SELECT password FROM users WHERE username = $1 OR email = $1', [username]);
  if (dbRes.rows.length != 1) {
    dbg("\tEmail doesn't exist\n}")
    return res.status(472).send('Username or email doesn\'t exist');
  }
  if (!await argon2.verify(dbRes.rows[0].password, password)) {
    dbg("\tWrong password\n}")
    return res.status(400).send('Wrong password');
  }
});

export default router;