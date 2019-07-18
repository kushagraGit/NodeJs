const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.post('/users',(res,req)=>{
    console.log('Test Service')
})

app.listen(port, () =>{
    console.log('Server is up')
})