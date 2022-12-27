const jwt= require("jsonwebtoken")
const key='1234567';

function verification(req,res,next){
    const bearerheader = req.headers['authorization'];
    if(bearerheader==undefined){
        return res.sendStatus(403);
    }
    const token= bearerheader.split(" ")[1];
    const result =tokenValidation(token);
    if(result){
        req.userData = result;
        next();
    }else{
        res.sendStatus(403);
    }

}

function tokenValidation(token){
 const result=  jwt.verify(token,key,(err,authData)=>{
        if(err){
            console.log(err);
            return undefined;
        }else{
            return authData;
        }
    });
    return result;
}
module.exports = verification;