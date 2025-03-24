const express=require("express")
const cors=require("cors")
const app=express()
const mongoose=require('mongoose')

const Hotel=require("./customerModel")
app.use(cors())
app.use(express.json())

app.listen(1216,()=>console.log("backend started"))
app.get("/",(req,res)=>{
    res.json("received get")
})
mongoose.connect("mongodb://localhost:27017/HotelsInfo");
app.get("/getHotels",async (req,res)=>{
    try{
        await Hotel.find().then((response)=>{
            res.send(response)            
        })
    }catch(err){
        console.log(err);
        
    }
})
app.post("/deleteHotel",async (req,res)=>{
    try{
        await Hotel.deleteOne(req.body).then((response)=>{
            console.log(response);
            res.send(response)
        })
    }
    catch(err){
        console.log(err);
        
    }
    
})
app.post("/newHotel",async (req,res)=>{
    console.log("request receivd",req.body);
    try{
         await Hotel.create(req.body).then((response)=>{

             console.log("mongoose_response",response);       
             
             res.send(response)
            })
    }
    catch(err){

        console.log("mongoose failed");
        console.log(err);
        
    }
})