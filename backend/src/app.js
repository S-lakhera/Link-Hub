import express from 'express'

const app = express();

app.get("/", (req,res) => {
    res.send("Healthy connection")
})

export default app;