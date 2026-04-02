import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDB.js';
dotenv.config();


const app = express();


const PORT = process.env.PORT || 6000

app.get("/", (req,res) => {
    return res.json({
        message: "server started succesfully"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    connectDb();
})