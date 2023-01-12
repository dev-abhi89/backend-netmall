const verification = require('../../middleware/jwt.auth');
const OrderModel = require('../../models/order.model');
const ProductModel = require('../../models/product.model');

const router = require('express').Router();

router.get('/',testAPI);
router.post('/add-order',addOrder);
router.get('/get-order',getOrder);
router.delete('/delete-order',verification,deleteOrder);



function testAPI(req,res){
    res.json({message:"Working"});
}


async function getOrder(req,res){
    const q =await OrderModel.find({user:req.body.user||'63abe245b1324bfa61b06f70'}).populate('user','name email image').populate('address').populate('product');
    res.json(q);

}
async function addOrder(req,res){

   try{ const q =OrderModel({...req.body,user:req.body.user ||'63abe245b1324bfa61b06f70'});
   const product =await ProductModel.findById(req.body.product);
   if(product.quantity<=0){
    return res.sendStatus(400).json({message:"out of stock"});
   }
   product.quantity--;
   await product.save();
    await q.save();
    res.json(q);
}catch(e){
    console.log(e,"on add order");
    res.sendStatus(400);
}
}

async function deleteOrder(req,res){
    try{

        const q = await OrderModel.findOne({_id:req.body._id,user:req.userData._id});
        if(q){
            await q.delete();
            res.json({message:"order has been deleted!"})
        }else{
            sendStatus(403);
        }
    }catch(e){
        console.log(e,"on delete order");
        res.sendStatus(400);
    }
}


module.exports = router;