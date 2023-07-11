import { Response, request, Router } from 'express';
import { userSchema } from '../models/user.js';
import { db } from '../db.js';
import * as argon2 from 'argon2';
import debug from 'debug';

const dbg = debug('server:users');
const router = Router();

router.post('/register', async (req, res) => {
  dbg("New user registration ", req.body.username, ', ', req.body.email, "\n{");

  // --- Validation ---
  const { error } = userSchema.validate(req.body);
  if (error) {
    dbg("\tValidation error: ", error, "\n}");
    if (error.details[0].type === 'string.email')                                   // The only possible error for email is the format.
      return res.status(461).send(error.details[0].message);                        // 461 is for email format error
    else                                                                            // The only other possible errors is for username.
      return res.status(462).send(error.details[0].message);                        // 462 is for username format error
  }

  // --- Database ---
  // -- Parse --
  const { username, email, password } = req.body;

  // -- Checks --
  // - Email -
  const emails = await db.query('SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)', [email]);
  if (emails.rows[0].exists) {
    dbg("\tEmail already exists\n}")
    return res.status(471).send('Email already exists');
  }

  // - Username -
  const usernames = await db.query('SELECT EXISTS(SELECT 1 FROM users WHERE username = $1)', [username]);
  if (usernames.rows[0].exists) {
    dbg("\tUsername already exists\n}")
    return res.status(472).send('Username already exists');
  }

  // -- Insert --
  db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
    [username,
      email,
      await argon2.hash(password).catch((e) => {
        console.log("Password hashing error ", e);
        return res.status(500).send('Internal Server Error');
      })
    ],

    (err, result) => {                                                              // Callback Function
      if (err) {                                                                    // - Database error
        console.log("\tDatabase error: ", err, "\n}");                              // - - There is no handling of this kind of error.        
        return res.status(500).send('Internal Server Error');                       // - - The client would have to press the button again         
      }                                                                             // - - and hope for a better outcome.

      res.status(201).send('User created');
      dbg("\tUser created\n}");
    });
});

export default router;