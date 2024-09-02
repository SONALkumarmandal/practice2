import mongoose from "mongoose";
import { DBname } from "../constants.js";
import express from "express";
const app=express()
export const DBconnection=async()=>{
    try {
       const connectionInstance= await new mongoose.connect(`${process.env.MONGO_URL}/${DBname}`)
       console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
        app.listen(`${process.env.PORT}`,()=>{
            `server started at port ${process.env.PORT}`
        })
    } catch (error) {
        console.log("error",error)
    }
}