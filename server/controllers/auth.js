import pool from '../config/connection.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

// Register Route
export const register = async(req, res) => {
    try {
        
        const { email, password } = req.body;
        
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

      const token = jwt.sign({id: user.rows[0].user_id}, process.env.ACCESS_TOKEN_SECRET)
      res.cookie("accessToken", token, {
      httpOnly: true,
     })

      return res.json(user.rows[0].user_email);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
}

export const logout = async(req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
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
