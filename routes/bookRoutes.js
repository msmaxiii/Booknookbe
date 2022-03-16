const express = require('express')
const Book = require('../schema/bookSchema')

const bookRouter = express.Router()

bookRouter.get('/', (req,res)=>{
    Book.find((error,result)=>{
        if (error){
            res.status(500).json({message:error.message})
        }
        if (result --- null || result ===[]){
            res.status(404).json({message:error.message})
        }
        res.status(200).json({message:"Book Found"})
    })
   
})
bookRouter.post('/',(req,res)=>{
    const book = req.body 
    Book.create(book, (error, result)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(400).json({message: error.message})
        }
            res.status(201).json({book_item: result})
    })                

})
bookRouter.get("/:id", (req, res)=>{
    const id = req.params.id
    Book.findById(id, (error, result)=>{
        if(error){
            res.status(500).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(404).json({message: error.message})
        }
        res.status(200).json({book: result})
    })
})

bookRouter.put("/:id", (req, res)=>{
    const id = req.params.id
    const update = req.body

    Book.findByIdAndUpdate(id, update, {new: true}, (error, result)=>{
        if(error){
            res.status(500).json({message: error.message})
        }
        if(result ===  null || result === []){
            res.status(404).json({message: error.message})
        }
        res.status(202).json({book_item: result})
    })
})
bookRouter.delete("/:id", (req, res)=>{
    const id = req.params.id
    Book.findByIdAndDelete(id, (error, result)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        res.status(204).json({status: "Deleted"})
    })
})

module.exports = bookRouter
