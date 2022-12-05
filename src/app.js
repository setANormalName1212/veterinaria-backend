import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
// import route
import { index } from "./route/index.js";
import { user } from './route/user.js'
import { product } from './route/product.js'
import { cart } from './route/cart.js'
import { order } from './route/order.js'
dotenv.config()

// settings
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('PORT', process.env.PORT || 3000)

connect(process.env.MONGO_URI, () => {
    console.log('MongoDB connected...')
})

// route
app.use("/", index)
app.use("/user", user)
app.use("/product", product)
app.use("/cart", cart)
app.use("/order", order)

app.listen(app.get('PORT'), () => {
    console.log(`Server running on port: ${app.get('PORT')}`)
})