import {config} from "dotenv";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import { connectDB } from "../lib/db.js";

config();

const seedUsers = [
    {
        fullName: "plo Doe",
        email: "john1@email.com",
        password: "password123",  
        profilePic: "",
    },
     
]

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.log("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();