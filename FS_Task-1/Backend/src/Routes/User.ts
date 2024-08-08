import { Router, Request, Response} from 'express';
import { logout, signin, signup } from '../Controller/User';

const router = Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/logout', logout)

export default router