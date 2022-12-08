import { Router } from "express";
const router = Router()

// auth
import auth from '../controller/middlewares/auth.js'

// controller
import cart from '../controller/cart.js'

// Get one cart
router.get("/", auth, cart.get)

// Add product to cart
router.put("/add/:id", auth, cart.add)

// Take product from cart
router.delete("/take/:id", auth, cart.take)

// delete cart
router.delete("/", auth, cart.delete)

export { router as cart}