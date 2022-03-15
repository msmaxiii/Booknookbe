const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{type: String, required:true},
    author:{type:String, required:true },
    category:{type:String, required:true}
})

const bookSchema =mongoose.model('book',bookSchema)

module.exports =bookSchema