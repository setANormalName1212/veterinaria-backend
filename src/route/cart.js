import { Router } from "express";
const router = Router()

// auth
import auth from '../controller/middlewares/auth.js'

// controller
import cart from '../controller/cart.js'

router.get("/", cart.getAll)

router.get("/:id", auth, cart.get)

router.post("/", cart.add)

router.put("/", cart.update)

router.delete("/", cart.delete)

export { router as cart}