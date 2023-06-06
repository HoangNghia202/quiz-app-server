import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: false,
        },
        ques1: {
            type: String,
            required: true,
            unique: false,
        },

        ques2: {
            type: String,
            required: true,
            unique: false,
        },

        ques3: {
            type: String,
            required: true,
            unique: false,
        },
        ques4: {
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
