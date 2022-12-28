const express = require('express');
const connectDB = require('./src/config/db.config');
const useAPI = require('./src/routes/route');
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>res.json({message:"connected"}))
useAPI(app);
connectDB();

app.listen(3001,()=>{

    console.log("server is listening on:",3001);
});
