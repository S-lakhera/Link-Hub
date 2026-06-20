import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        minlength: 6
    },
},
    {
        timestamps: true
    }
)

userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }

    try {
        let salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
    } catch (error) {
        throw new Error(error);
    }
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;