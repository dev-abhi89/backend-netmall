const verification = require('../../middleware/jwt.auth');
const ProductModel = require('../../models/product.model');

const router = require('express').Router();

router.get('/',getProduct);
router.get('/get-product',verification,getAllProduct);
router.post('/add-product',verification,addProduct);
router.put('/update-product',verification,updateProduct);
router.delete('/delete-product',verification,deleteProduct);



function getProduct(req,res){

    res.json({done:"Worling"});
}
async function getAllProduct(req,res){
   const data = await ProductModel.find().populate('seller','name image email',);
   res.json(data);
}
async function addProduct(req,res){
    try{
    const q = ProductModel({...req.body,seller:req.userData._id});
    await q.save();
    res.json(q);
}
    catch(e){
        console.log(e);
        res.SendStatus(400);
    }
}
async function updateProduct(req,res){
    try{
   var q= await ProductModel.findOne({_id:req.body._id,seller:req.userData._id},req.body);
   if(q){
    await q.updateOne(req.body);
    res.json({message:"Product updated successfully"});
}else{
    res.sendStatus(403)
}
   
}catch(e){
    res.SendStatus(400);
}

   

}
async function deleteProduct(req,res){
    const q=await ProductModel.findOne({_id:req.body._id,seller:req.userData._id});
    if(q){
       await q.deleteOne();
       res.json({message:"Product deleted successfully"});
    }else{
        res.sendStatus(403);
    }

}

module.exports = router