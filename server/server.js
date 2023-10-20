import express from 'express'
import pool from "./config/connection.js"
import authRouter from "./routes/auth.js"
import emailRouter from "./routes/email.js"
import cookieParser from 'cookie-parser';
import cors from "cors"


const app = express();
const PORT = process.env.PORT || 3001;




app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use("/auth/api", authRouter)
app.use("/api", emailRouter)
// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
