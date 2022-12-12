import { Router } from "express";
const router = Router()

// controller
import order from '../controller/order.js'

router.get("/", order.getAll)

router.get("/:orderNumber", order.get)

export { router as order}