import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";  
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js"; 
 
dotenv.config(); 
const app = express();
const PORT = process.env.PORT|| 5001;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

 
app.use(cors({
  origin: [
    "https://messuer.vercel.app",
    "https://yourchats.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
 
app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes);  
 
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  connectDB();
});
 
