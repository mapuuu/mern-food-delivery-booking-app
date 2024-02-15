import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to Mongo!!!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
    res.json({
        message: "Hello!!!",
    })
});

app.listen(7000, () => {
    console.log("Server is running at http://localhost:7000");
})