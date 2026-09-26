
const express = require("express");

const fs=require("fs")

const app = express();

const {logReqRes}=require("./middlewares")

const userRouter=require('./routes/user')

const {connectMongoDB}=require("./connection")

const PORT = 8000;

connectMongoDB('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("MongoDB connected successfully")
)


app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"))

app.use('/api/users',userRouter)

app.listen(PORT, () => console.log("Server Started"));