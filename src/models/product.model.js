const mongoose=require('mongoose');

const ProductSchema =mongoose.Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
    description:{type:String,default:""},
    quantity:{type:Number,default:50},
    image:{type:String,default:""},
    category:{type:String,default:"Cloths"},
    color:{type:String,default:"white"},
    seller:{type:mongoose.Types.ObjectId,ref:'UserModel'}
    ,brand:{type:String,default:""}

})
const ProductModel=mongoose.model('ProductModel',ProductSchema);
module.exports=ProductModel;
