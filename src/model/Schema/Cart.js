import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    _id: Schema.Types.ObjectId,
    productIDs: {
        type: [],
        default: []
    },
    currentTotalPrice: {
        type: Number,
        default: 0
    }
})

export default model("carts", cartSchema)