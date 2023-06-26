const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
const router = express.Router()
const port = process.env.PORT || 3000
const myname = process.env.VNAME

app.get('/',(req,res)=>{
    res.send("test node app deployment")
})
app.get('/myname',(req,res)=>{
    res.send(myname)
    console.log(myname)
})


app.listen(port,()=>{
    console.log("app is listening to "+port)
})
