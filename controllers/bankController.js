import BankModel from "../models/BankModel.js";

// CREATE BANK
export const createBank = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const newBank = await BankModel.create(req.body);
        console.log("data", newBank);
        res.status(201).json({ newBank, message: "Bank created successfully" });
    } catch (error) {
        console.log("error", error);

        res.status(500).json(error);
    }
};

export const addAccessedUser = async (req, res) => {
    try {
        let { bankId, userId } = req.params;
        const bank = await BankModel.findById(bankId);
        if (!bank.usersAccessed.includes(userId)) {
            bank.usersAccessed.push(userId);
            await bank.save();
            return res.status(200).json({
                message: "Accessed user added successfully",
                data: bank,
            });
        } else {
            return res.status(400).json({
                message: "user already accessed",
                data: bank,
            });
        }
    } catch (err) {
        console.log("err add accessed user>>>", err.message);
        return res.status(404).json({ message: "Accessed user added failed" });
    }
};

export const getAllBanks = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await BankModel.find();
        if (data) {
            return res.status(200).json({
                message: "Bank found",
                data,
            });
        } else {
            return res.status(404).json({
                message: "Banks not found",
            });
        }
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            message: "server error",
        });
    }
};

export const getBankById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await BankModel.findById(id);
        if (data) {
            return res.status(200).json({
                message: "Bank found",
                data: data,
            });
        } else {
            return res.status(404).json({
                message: "Banks not found",
            });
        }
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            message: "server error",
        });
    }
};
