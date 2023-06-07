import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { verifyToken } from "./middleware/authMw.js";
import authRouter from "./routes/auth.js";
import bankRouter from "./routes/bankRoute.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send("<h1>Server is running</h1>");
});

app.use("/", authRouter);
app.use("/", bankRouter);

const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () =>
            console.log(`Server running on port:http://localhost:${PORT}`)
        );
    })

    .catch((error) => console.error(error.message, "\nDid not connect"));
