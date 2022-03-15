const mongoose = require ('mongoose')

const orderSchema = new mongoose.Schema({
    order_id:{type:String, required:true},
    name:{type:String, required:true},
    address:{type:String, required:true},
    email:{type:String, required:true}

})
module.exports = orderSchema
