const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:'UserModel'},
    product :{type:mongoose.Types.ObjectId,ref:'ProductModel'},
    amount:{type:Number,require:true},
    address:{type:mongoose.Types.ObjectId,ref:'AddressModel'}
    ,quantity:{type:Number,default:1},

},{timestamps:true})

const OrderModel = mongoose.model('OrderModel',OrderSchema);
module.exports = OrderModel;