const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const TodoModel = require("./Models/Todo")

const app= express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/todos")

app.post("/add",(req,res)=>{
    const task= req.body.task;
    TodoModel.create({
        task:task
    }).then(result => console.result)
} )

app.listen(3001 ,()=>{
    console.log("server is running")
}) 

