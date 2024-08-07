import { Router, Request, Response} from 'express';
import { enterUserDetail, getDetais, updateUserDetail } from '../Controller/UserDetails';
import { authenticateUser } from '../Middlewares/Auth';

const router = Router()

router.post('/enterUserDetail',authenticateUser, enterUserDetail)
router.get('/getDetails', authenticateUser, getDetais)
router.put('/updateDetails/:email', authenticateUser, updateUserDetail)

export default router