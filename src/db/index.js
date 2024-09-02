import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"; // Make sure to install dotenv if not already installed

dotenv.config(); // Load environment variables from .env file

const app = express();
const DBconnection = async () => {
  try {
    // Use the URI from the environment variable for better security
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );

    // Listen on the PORT defined in the environment variable
    const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
};

export default DBconnection;
