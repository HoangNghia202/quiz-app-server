import express from "express";
import { verifyToken } from "../middleware/authMw.js";
import {
    createBank,
    getAllBanks,
    getBankById,
} from "../controllers/bankController.js";
const bankRouter = express.Router();
bankRouter.post("/createBank", verifyToken, createBank);
bankRouter.get("/allBank", verifyToken, getAllBanks);
bankRouter.get("/bank/:id", verifyToken, getBankById);
export default bankRouter;
