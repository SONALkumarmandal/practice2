import express from "express";
import dotenv from "dotenv"
const app=express()
import DBconnection from "./db/index.js"

dotenv.config({
    path:'./env'
})
DBconnection()