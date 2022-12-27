const mongoose =require('mongoose');

const UserSchema = mongoose.Schema({
    name:{type:String,require:true},
    gender:String,
    email:{type:String,unique:true,require:true},
    number:Number,
    image:{type:String,default:"https://i.stack.imgur.com/34AD2.jpg"}
    ,token:{type:String,default:""},
},{timestamps:true});


const UserModel = mongoose.model('UserModel',UserSchema);
module.exports= UserModel;