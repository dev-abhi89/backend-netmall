const jwt = require('jsonwebtoken');
const verification = require('../../middleware/jwt.auth');
const key ='1234567'
const UserModel = require('../../models/user.model');

const router = require('express').Router();


router.get('/',getData);
router.post('/create-user',createUser);
router.get('/get-user',verification,getUser)
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
    const user =await UserModel.findById(req.userData._id);
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
    const sign = jwt.sign(obj,key);
    return sign;
}

module.exports= router;