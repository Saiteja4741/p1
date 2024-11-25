const express=require("express")
const session = require("express-session")
const app=express();
 
app.use(session({
    secret:"your",
    resave: false,
    saveUninitialized:true,
    cookie :{secure:false}
}))

app.use('/set',(req,res)=>{
    req.session.user={name: "Sai" , age: 26}
    res.semd("sessin setted")
})

app.use('/get',(req,res)=>{
    if(req.session.user){
        res.send(`USer: ${req.session.user.name} age: ${req.session.user.age}`)
    }
    else{
        res.send("no data is setted to get")
    }
})

app.use('/delete',(req,res)=>{
    req.session.destroy();
    res.send("sessoin is deleted")
})

app.use(2020,()=>{
    console.log("port is listening")
})