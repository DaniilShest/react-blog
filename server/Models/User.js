import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        requiered: true,
        unique: true
    },
    password: {
        type: String,
        requiered: true
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)