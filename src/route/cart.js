import { Router } from "express";
const router = Router()

// controller
import cart from '../controller/cart.js'

router.get("/", cart.index)

export { router as cart}