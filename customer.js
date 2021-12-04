const mongoose=require("mongoose")
const express=require("express")
const router=express.Router();
router.use(express.json())

const customerModel=require("./Models/customerModel.js")

router.get("/",async(req,res)=>{
   return  res.json({data: "customer Details"})
})
//display customer 
router.get("/list",async(req,res)=>{
    const customerData =await customerModel.find();
    return res.json({data:customerData})
})
//add customer
router.post("/addcustomer",async(req,res)=>{
    const newcustomer= req.body;
  const customerData=  await customerModel.create(newcustomer);
   return res.json({ msg :"customer added successfully",data:customerData});
});

//delete customer
router.delete("/deletecustomer/:id",async(req,res)=>{
    const customerId= req.params.id;
     const  deletedcustomer =await customerModel.findOneAndDelete({customerId : customerId});
     res.json({status:"Customer Deleted Successfully",data:deletedcustomer})
    });


// update customer 
router.put("/updatecustomer/:id",async(req,res)=>{
    const customerId=req.params.id;
    const customerName=req.body.customerName;
    const type=req.body.type;
    const updatedData= await customerModel.findOneAndUpdate(
        {customerId:customerId},
        {customerName:customerName,
         type:type},
        {new:true}
        );
   return  res.json({msg:"Customer Updated Successfully",data:updatedData})

});

module.exports = router;