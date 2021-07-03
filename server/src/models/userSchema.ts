import {model, Schema} from 'mongoose';

export interface UserDocument extends Document {
    name: string,
    username: string,
    email: string,
    password: string
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export default model<UserDocument>("User", userSchema);