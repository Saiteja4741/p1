const cookieParser = require("cookie-parser")
const express = require("express")
const port = 3030

const app = express()
app.use(cookieParser())

app.use('/set',(req,res)=>{
    res.cookie("user", "Vishwa")
    res.send("Cookie is setted")
})

app.use('/get',(req,res)=>{
    const r = req.cookies.user
    res.send(r)
})

app.use('/delete',(req,res)=>{
    res.clearCookie("user")
    res.send("Cookie is deleted")
})

app.listen(port ,()=>{
    console.log("port is listening " , port)
})