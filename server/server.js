import express from 'express'
import cookieParser from 'cookie-parser';
import cors from "cors"
import router from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use("/", router)

// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
