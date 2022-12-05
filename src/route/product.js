import { Router } from "express";
const router = Router()

// controller
import product from '../controller/product.js'

router.get("/", product.getAll)

router.get("/:id", product.get)

export { router as product}