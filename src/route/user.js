import { Router } from "express";
const router = Router()

// controller
import user from '../controller/user.js'

// auth
import auth from '../controller/middlewares/auth.js'

// get user
router.get("/:id", user.get)

// get all users
router.get("/", user.getAll)

// update user data
router.put("/:id", user.put)

// log in
router.post("/login", user.login)

// register
router.post("/register", user.register)

// log out
router.delete("/logout", auth, user.logout)


export { router as user }