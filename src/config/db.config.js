const mongoose= require("mongoose");

const url ="mongodb://localhost:27017/Ecommerce";

function connectDB(){
mongoose.connect(url,(err)=>{
    if(err){
        console.log("cant connect  : ",err);
    }else{
        console.log("Database connected!");
    }
})
}

module.exports = connectDB;

