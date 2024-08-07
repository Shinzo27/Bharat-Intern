import express, { Request, Response } from 'express';
import userRouter from './Routes/User';
import cookieParser from 'cookie-parser';
import userDetailsRouter from './Routes/UserDetails'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/v1/user', userRouter);
app.use('/api/v1/userDetails', userDetailsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});