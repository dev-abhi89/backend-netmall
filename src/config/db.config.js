const mongoose= require("mongoose");


function connectDB(){
    const {URL}= process.env;
mongoose.connect(URL,(err)=>{
    if(err){
        console.log("cant connect  : ",err);
    }else{
        console.log("Database connected!");
    }
})
}

module.exports = connectDB;

