import express from 'express';


const app = express();


const PORT = 8000;

app.get("/", (req,res) => {
    return res.json({
        message: "server started succesfully"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})