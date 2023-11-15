import pool from '../config/connection.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

// Register Route
export const register = async(req, res) => {
    try {
        
        const { email, password } = req.body;
        console.log(email, password)
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
          ]);
     
        if (user.rows.length !== 0) {
            return res.status(401).send("Email already exists");
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound)

        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query("INSERT INTO users ( user_email, user_password, date_created) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *", [email, bcryptPassword])

        res.status(200).json("User has been created!")
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message)
    }
}

// Login
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);

      if (!email | !password) {
        return res.status(401).json("Please ensure all fields are filled")
      }
  
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credentials");
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].user_password
      );
  
      if (!validPassword) {
        return res.status(401).json("Invalid Credentials");
      }

      const accessToken = jwt.sign({id: user.rows[0].user_id, email}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn:'15m'
      })

      const refreshToken = jwt.sign({ userId: user.rows[0].user_id, email}, process.env.REFRESH_TOKEN_SECRET);

      res.cookie("access-token", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000, // 15 minutes
      sameSite: 'none',
      secure: true,
     })

     res.cookie("refresh-token", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      sameSite: 'none',
      secure: true,
    });

      return res.json(user.rows[0].user_email);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
}

export const logout = async(req, res) => {

  res.clearCookie("access-token", {
    httpOnly: true,
    sameSite: 'none',
    secure: true
  });
  
  res.clearCookie("refresh-token", {
    httpOnly: true,
    sameSite: 'none',
    secure: true
  });

  res.status(200).json("User has been logged out.");

}


export const newsletterSignup = async(req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    
    const user = await pool.query("SELECT * FROM newsletter WHERE user_email = $1", [
        email
      ]);
 
    if (user.rows.length !== 0) {
        return res.status(401).send("Email already exists");
    }

    const newUserNewsletter = await pool.query("INSERT INTO newsletter ( first_name, last_name, user_email, created_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *", [firstName, lastName, email])

    res.status(200).json(`${email} has been added to newsletter`)
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message)
  }
}


// Refreshing access tokens (not implemented on frontend yet)
// Will need to make a function in front end to check if access token is expired or near expiry, which will call this to refresh the accesstoken
export const refresh = async(req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden (invalid or expired token)
    }

    
    const accessToken = jwt.sign({ id: user.userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m', // 15 minutes
    });

    res.json({ accessToken });
  });
}

export const getProfile = async (req, res) => {
  const accessToken = req.cookies["access-token"]

  if (accessToken) {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, {}, (err, user) => {
      if (err) {
        console.error("JWT Verification Error:", err);
        return res.status(401).json("Invalid Token");
      }
      res.json(user);
    });
  } else {
    res.status(401).json("Token not found")
  }
}