const express = require('express')

const app = express()

app.get('',(req,res) => {
    res.send('<h5>Weather App</h5>')
})

app.get('/about',(req,res)=>{
    res.send('<title>About</title>'+
    '<body>About page with title</body>')
})

app.get('/weather',(req,res)=>{
    res.send({
        location: 'Pune',
        forecast: 'Partly cloudy'
    })
})

app.get('/help',(req,res) => {
    res.send({
        name: 'Kushagra',
        age: 25
    })
})

app.listen(8080, () => {
    console.log('Server is up')
})