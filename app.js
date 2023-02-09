const express = require("express");
const app= express();
const mongoose=require("mongoose");
app.use(express.json());




const mongoUrl="";
//saurabh:<password>@cluster0.gb4bs0l.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(mongoUrl, {
    useNewUrlParser : true
})
.then(()=>{
    console.log("Connected to database");
})
.catch((e) => console.log(e));

app.listen(5000,()=>{
    console.log("Server Started");
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;

    try{
        if(data=="adarh"){
            res.send({ status:"ok"})
        }else{
            res.send({ status:"User not found"})
        }

    } catch(error){
        res.send({ status:"error"})
    }

    
});

require("./userdetails");
const User = mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    console.log(req.body);
    const {name,email,mobileno}=req.body;

    try{
       await User.create(
        {
            uname:name,
            email,
            phoneNo:mobileno,
        }
       );
            res.send({ status:"ok"})
        

    } catch(error){
        res.send({ status:"error"})
    }

    
});