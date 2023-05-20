
import express from "express";
import { json } from "express";

const app = express();
app.use(json());

const PORT = 3000;

app.get("/", (req, res)=>{
    res.sendStatus(200)
})
app.listen(3000, ()=>{
    console.log(`Auth service is running on port ${PORT}`)
})