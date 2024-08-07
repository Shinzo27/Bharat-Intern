import { Router, Request, Response} from 'express';
import { signup } from '../Controller/User';

const router = Router()

router.post('/signup', signup)

export default router