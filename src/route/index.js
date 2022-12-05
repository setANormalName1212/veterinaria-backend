import { Router } from "express";
const router = Router()

// controller
import index from '../controller/index.js'

router.get("/", index)

export {
    router as index
}