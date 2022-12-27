const express = require('express');
const connectDB = require('./src/config/db.config');
const useAPI = require('./src/routes/route');
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDB();
useAPI(app);

const server = app.listen(3000,()=>{
    const port = server.address().port;
    const address =server.address().address;
    console.log("server is listening on:",address,port);
});
