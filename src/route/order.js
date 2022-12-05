import { Router } from "express";
const router = Router()

// controller
import order from '../controller/order.js'

router.get("/", order.index)

export { router as order}