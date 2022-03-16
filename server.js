const express =require('express')
const bodyParser = require('body-parser')
const dotenv = require ('dotenv')
const {mongooseConnect} = require('./config/mongoConfig')
const bookRouter = require('./routes/bookRoutes')
const orderRouter = require('./routes/orderRoutes')
const morgan = require ('morgan')
const cors = require('cors')


const app = express()

dotenv.config()


app.use (cors({
    origin:"*"
}))
app.use (bodyParser.json())
app.use (morgan ('dev'))

app.use ('/book',bookRouter)
app.use('/order',orderRouter)

const PORT = process.env.PORT || 7020

app.use('/', (req,res)=>{
    res.status(200).json({message:"API UP"})
})

app.listen(PORT, ()=>{
    mongooseConnect()
    console.log(PORT)
    
})