import "dotenv/config"
import express, { Application, NextFunction, } from "express";
import postRoute from "./router/postRout"
const PORT: number = Number(process.env.PORT) || 3001

const app: Application = express()


app.use("/post",postRoute)
app.use(express.json())



app.listen(PORT, () => console.log("port is running On port :" + PORT))
