const mongoose=require("mongoose")

const customerSchema=mongoose.Schema({
    customerId:String,
    customerName:String,
    type:[String]
    
})
const customerModel=mongoose.model("customer",customerSchema,"customer")

module.exports=customerModel