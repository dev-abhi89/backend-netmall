const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,ref:'UserModel'
    },
    city:{type:String,require:true},
    state:{type:String, require:true},
    street:{type:String,require:true},
    local:{type:String,default:""},
    pincode:{type:Number,require:true}
});

const AddressModel = mongoose.model('AddressModel',AddressSchema);

module.exports= AddressModel;