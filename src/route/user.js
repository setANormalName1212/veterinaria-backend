import { Router } from "express";
const router = Router()

// controller
import user from '../controller/user.js'

// new user
router.post("/", user.add)

// get user
router.get("/:id", user.get)

// get all users
router.get("/", user.getAll)

// update user data
router.put("/:id", user.put)

// delete
router.delete("/:id", user.delete)

// login
router.post("/login", user.login)

// register
router.post("/register", user.register)


export { router as user }