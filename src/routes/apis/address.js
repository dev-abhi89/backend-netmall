const verification = require('../../middleware/jwt.auth');
const AddressModel = require('../../models/address.model');

const router = require('express').Router();

router.get('/',getTest);
router.get('/get-address',verification,getAddress);
router.post('/add-address',verification,addAddress);
router.put('/update-address',verification,updateAddress);
router.delete('/delete-address',verification,deleteAddress);


function getTest(req,res){
    res.json({message:"woking"});
}

async function getAddress(req,res){
const q= await AddressModel.find({user:req.userData._id});
res.json(q);
}
async function addAddress(req,res){
    try{
    const q= AddressModel({...req.body,user:req.userData._id});
    await q.save();
    res.json(q);
    }
    catch(e){
        console.log(e,"on add address");
        res.sendStatus(400);
    }
}
async function updateAddress(req,res){
    const q =await AddressModel.findOne({user:req.userData._id,_id:req.body._id});
    if(q){
       await q.updateOne(req.body);
       res.json({message:"address upated successfully"});
    }else{
        res.sendStatus(403);
    }
}
async function deleteAddress(req,res){
    const q =await AddressModel.findOne({user:req.userData._id,_id:req.body._id});
    if(q){
       await q.deleteOne();
       res.json({message:"address deleted successfully"});
    }else{
        res.sendStatus(403);
    }
}


module.exports = router;