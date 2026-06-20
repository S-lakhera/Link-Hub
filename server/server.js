import dotenv from 'dotenv';
dotenv.config();
import app from "./src/app.js";
import connectDB from './src/config/db.js';

let port = process.env.PORT;

async function startServer(){
    await connectDB()
    
    app.listen(port,() => {
        console.log("Server is running at", port);
    })
}

startServer();