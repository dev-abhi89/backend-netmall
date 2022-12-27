const mongoose= require("mongoose");


function connectDB(){
    const {DATABASE,URL,PORT}= process.env;
    const url =`${URL}:${PORT}/${DATABASE}`;

    console.log(DATABASE,URL,PORT,"@@@@@@@@@@@@@@@@@");
mongoose.connect(url,(err)=>{
    if(err){
        console.log("cant connect  : ",err);
    }else{
        console.log("Database connected!");
    }
})
}

module.exports = connectDB;

