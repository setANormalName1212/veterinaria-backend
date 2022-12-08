import { Router } from "express";
const router = Router()

// controller
import index from '../controller/index.js'

// auth
import auth from '../controller/middlewares/auth.js'

router.get("/", auth, index)

export {
    router as index
}