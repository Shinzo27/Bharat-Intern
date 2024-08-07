import { Router, Request, Response} from 'express';
import { enterUserDetail, getDetais } from '../Controller/UserDetails';
import { authenticateUser } from '../Middlewares/Auth';

const router = Router()

router.post('/enterUserDetail',authenticateUser, enterUserDetail)
router.get('/getDetails', authenticateUser, getDetais)

export default router