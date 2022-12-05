import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    locked: {
        type: Boolean,
        default: false
    },
    cartID: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

export default model("users", userSchema)