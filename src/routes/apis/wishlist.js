const verification = require('../../middleware/jwt.auth');
const WishlistModel = require('../../models/wishlist.model');

const router = require('express').Router();

router.get('/',verification,getList);
router.post('/click',verification,wishlist);

async function getList(req,res){
    const q =await WishlistModel.find({user:req.userData._id});
    res.json(q);
}
async function wishlist(req,res){
    try{
    const q = await WishlistModel.findOne({user:req.userData._id,product:req.body.product});
    if(q){
        await q.delete();
        res.json({message:'product has been removed',check:false});

    }else{
        await WishlistModel({...req.body,user:req.userData._id}).save();
        res.json({message:'prduct has been added',check:true});
    }
}catch(e){
    console.log(e,"on wishlist click");
    res.sendStatus(400);
}
}

module.exports= router;