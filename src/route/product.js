import { Router } from "express";
const router = Router()

// controller
import product from '../controller/product.js'

router.get("/", product.getAll)

router.get("/:id", product.get)

router.post("/", product.add)

router.put("/:id", product.update)

router.delete("/:id", product.delete)

router.delete("/", product.deleteAll)

export { router as product}