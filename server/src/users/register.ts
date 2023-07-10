import { Response, request, Router } from 'express';
import { userSchema } from '../models/user.js';
import { db } from '../db.js';
import * as argon2 from 'argon2';
import debug from 'debug';

const dbg = debug('server:users');
const router = Router();

router.post('/register', async (req, res) => {
  dbg("New user registration ", req.body.username, ', ', req.body.email, "\n{");
  const { error } = userSchema.validate(req.body);
  if (error) {
    dbg("\tValidation error: ", error, "\n}");
    return res.status(400).send(error.details[0].message);
  }

  const { username, email, password } = req.body;

  const emails = await db.query('SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)', [email]);
  if (emails.rows[0].exists) {
    dbg("\tEmail already exists\n}")
    return res.status(461).send('Email already exists');
  }

  const usernames = await db.query('SELECT EXISTS(SELECT 1 FROM users WHERE username = $1)', [username]);
  if (usernames.rows[0].exists) {
    dbg("\tUsername already exists\n}")
    return res.status(462).send('Username already exists');
  }


  db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
    [username,
      email,
      await argon2.hash(password).catch((e) => {
        console.log("Password hashing error ", e);
        return res.status(500).send('Internal Server Error');
      })
    ],

    (err, result) => {
      if (err) {
        console.log("\tDatabase error: ", err, "\n}");
        return res.status(500).send('Internal Server Error');
      }

      res.status(201).send('User created');
      dbg("\tUser created\n}");
    });
});

export default router;