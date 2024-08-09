import express from 'express'
import { userAuth } from '../Middlewares/Auth.js'
import { addExpense, addIncome, getExpenses, getIncome, getTotalIncome } from '../Controllers/Transaction.js'

const router = express.Router()

router.get("/getExpenses", userAuth, getExpenses)
router.get("/getIncome", userAuth, getIncome)
router.get("/getTotalIncome", userAuth, getTotalIncome)
router.post("/addIncome", userAuth, addIncome)
router.post("/addExpense", userAuth, addExpense)

export default router