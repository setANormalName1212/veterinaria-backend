import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    _id: Schema.Types.ObjectId,
    productIDs: {
        type: [String],
        default: []
    },
    currentTotalPrice: {
        type: Number,
        default: 0
    }
})

export default model("carts", cartSchema)