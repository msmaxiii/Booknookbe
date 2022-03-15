const express =require('express')
const bodyParser =require('body-Parser')
const dotenv =require ('dotenv')
const cors =require('cors')
const helmet =('helmet')
const {mongooseConnect} =('/')
const morgan = ('morgan')

const app = express()

dotenv.config()


app.use (body-Parser.json())
app.use (morgan ('dev'))

const PORT = process.env.PORT || 7020

app.use('/', (req,res)=>{
    res.status(200).json({message:"API UP"})
})

app.listen(PORT,()=>{
console.log('PORT avail')
mongooseConnect()
})