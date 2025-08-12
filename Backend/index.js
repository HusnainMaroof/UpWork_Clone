import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import { connectDB } from "./Config/Connect.js"
import { errorHandler } from "./Middleware/errorMiddleware.js"
import { usersRouter } from "./Routes/UsersRoutes.js"
import cors from "cors"

const app = express()

dotenv.config()

app.use(cors())
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use('/api/users' ,  usersRouter)

app.use(errorHandler)
app.listen(process.env.PORT_NO, () => console.log(`Server has been on Port on ${process.env.PORT_NO.blue}  `))



