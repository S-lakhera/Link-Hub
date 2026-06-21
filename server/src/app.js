import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import linkRoutes from './routes/link.routes.js'

const app = express();

app.use(express.json({ limit: '2mb' }))
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}))


app.use("/api/auth", authRoutes)
app.use("/api/links", linkRoutes)

app.get("/", (req, res) => {
    res.send("Healthy connection")
})

export default app;