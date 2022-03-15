const express =require('express')
const bodyParser =require('body-parser')
const dotenv =require ('dotenv')
// const cors =require('cors')

// const {mongooseConnect} =('./config/mongoConfig')
const morgan = require ('morgan')

const app = express()

dotenv.config()


app.use (bodyParser.json())
app.use (morgan ('dev'))

const PORT = process.env.PORT || 7020

app.use('/', (req,res)=>{
    res.status(200).json({message:"API UP"})
})

app.listen(PORT, ()=>{
    console.log(PORT)
    // mongooseConnect()
})