import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    productIDs: {
        type: [ObjectId],
        default: []
    },
    currentTotalPrice: {
        type: Number,
        default: 0
    }
})

export default model("carts", cartSchema)