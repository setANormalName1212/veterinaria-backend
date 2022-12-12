import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    products: {
        type: Array,
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