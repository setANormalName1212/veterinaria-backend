import { Schema, model } from "mongoose";

const productSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new Schema({
    products: {
        type: [productSchema],
        default: []
    },
    totalPrice: {
        type: Number,
        required: true
    },
    orderNum: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        required: false,
    }
})

export default model("orders", orderSchema)