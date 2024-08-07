import express, { Request, Response } from 'express';
import userRouter from './Routes/User';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// Use the router
app.use('/api/v1/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});