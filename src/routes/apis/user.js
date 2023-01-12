const jwt = require('jsonwebtoken');
const verification = require('../../middleware/jwt.auth');
const UserModel = require('../../models/user.model');

const router = require('express').Router();

//
router.get('/',getData);
router.post('/create-user',createUser);
router.get('/get-user',getUser)
router.put('/update-user',verification,updateUser);


async function getData(req,res){
    const users=await UserModel.find();
    res.json({users,done:"allis working"});
}
async function createUser(req,res){
    try{
        const user =req.body;
        const U=UserModel(user);
        U.token = createToken({_id:U._id,name:U.name,email:U.email});
        await U.save();
        res.json(U);
    }catch(e){
        console.log(e, 'on create user');
        res.sendStatus(400);
    }
}
async function getUser(req,res){
    const user =await UserModel.findById(req.body.user||'63abe245b1324bfa61b06f70');
    res.json(user);
}
async function updateUser(req,res){
    try{
    const U= await UserModel.findByIdAndUpdate(req.userData._id,req.body);
    res.json({"message":"user updated successfully"});
}catch(e){
    console.log(e,"at update user");
    res.sendStatus(400);
}
} 
function createToken(obj){
    const sign = jwt.sign(obj,process.env.KEY);
    return sign;
}

module.exports= router;