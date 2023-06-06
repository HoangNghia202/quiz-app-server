import BankModel from "../models/BankModel.js";

// CREATE BANK
export const createBank = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const newBank = await BankModel.create(req.body);
        console.log("data", newBank);
        let result = {
            data: newBank,
            message: "Bank Created Successfully",
            errCode: 0,
        };
        res.status(201).json(result);
    } catch (error) {
        console.log("error", error);
        let result = {
            message: error.message,
            errCode: 1,
        };
        res.status(500).json(result);
    }
};

export const addAccessedUser = async (req, res) => {
    try {
        let { bankId, userId } = req.params;
        const bank = await BankModel.findById(bankId);
        if (!bank.accessedUsers.includes(userId)) {
            bank.accessedUsers.push(userId);
        }
        await bank.save();
        return res.status(200).json({
            message: "Accessed user added successfully",
            errCode: 0,
            data: bank,
        });
    } catch (err) {
        console.log("err add accessed user>>>", err.message);
        return res
            .status(404)
            .json({ message: "Accessed user added failed", errCode: 1 });
    }
};

export const getAllBanks = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await BankModel.find();
        if (data) {
            return res.status(200).json({
                message: "Bank found",
                errCode: 0,
                data,
            });
        } else {
            return res.status(404).json({
                message: "Banks not found",
                errCode: 1,
            });
        }
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            message: "server error",
            errCode: 1,
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
                errCode: 0,
                data,
            });
        } else {
            return res.status(404).json({
                message: "Banks not found",
                errCode: 1,
            });
        }
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            message: "server error",
            errCode: 1,
        });
    }
};
