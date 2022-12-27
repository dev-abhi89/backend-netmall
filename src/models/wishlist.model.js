const mongoose = require('mongoose');

const WishlistSchema = mongoose.Schema({
    user:{type:mongoose.Types.ObjectId, ref:'UserModel'},
    product:{type:mongoose.Types.ObjectId, ref:'ProductModel'},

},{timestamps:true});


const WishlistModel = mongoose.model('wishlistModel',WishlistSchema);

module.exports=WishlistModel;