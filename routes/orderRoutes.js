const express = require('express')
const Order = require('../schema/orderSchema')

const orderRouter = express.Router()

orderRouter.get('/', (req,res)=>{
    Order.find((error,result)=>{
        if (error){
            res.status(500).json({message:error.message})
        }
        if (result --- null || result ===[]){
            res.status(404).json({message:error.message})
        }
        res.status(200).json({message:"Order Found"})
    })
   
})
orderRouter.post('/',(req,res)=>{
    const order = req.body 
    Order.create(order, (error, result)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(400).json({message: error.message})
        }
            res.status(201).json({order_item: result})
    })                

})
orderRouter.get("/:id", (req, res)=>{
    const id = req.params.id
    Order.findById(id, (error, result)=>{
        if(error){
            res.status(500).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(404).json({message: error.message})
        }
        res.status(200).json({order: result})
    })
})
module.exports = orderRouter