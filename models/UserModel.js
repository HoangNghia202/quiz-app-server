import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 255,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 255,
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 255,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 1024,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
