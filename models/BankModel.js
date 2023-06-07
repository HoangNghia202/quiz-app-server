import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: false,
        },
        ans1: {
            type: String,
            required: true,
            unique: false,
        },

        ans2: {
            type: String,
            required: true,
            unique: false,
        },

        ans3: {
            type: String,
            required: true,
            unique: false,
        },
        ans4: {
            type: String,
            required: true,
            unique: false,
        },

        solution: {
            type: String,
            required: true,
            unique: false,
        },
    },
    { timestamps: true }
);
const BankSchema = mongoose.Schema(
    {
        bankName: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        questions: [questionSchema],
        usersAccessed: {
            type: [String],
        },
    },
    { timestamps: true }
);

const BankModel = mongoose.model("Bank", BankSchema);
export default BankModel;
