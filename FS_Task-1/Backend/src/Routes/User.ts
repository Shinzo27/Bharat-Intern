import { Router, Request, Response} from 'express';
import { signin, signup } from '../Controller/User';

const router = Router()

router.post('/signup', signup)
router.post('/signin', signin)

export default router