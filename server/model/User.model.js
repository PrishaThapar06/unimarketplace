import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a firstName"],
        
    },
    lastName: {
        type: String,
        required: [true, "Please provide a lastName"],
        
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true
    }
});

export default mongoose.model('User', UserSchema);