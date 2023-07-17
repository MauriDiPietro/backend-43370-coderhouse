import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, max: 100 },
    last_name: { type: String, required: true, max: 100 },
    admin: { type: Boolean, default: false },
    age: { type: Number, required: true }
});

export const UserModel = mongoose.model('users', UserSchema);