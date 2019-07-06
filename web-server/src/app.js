const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views', viewPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Kushagra'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Help',
        helptext: 'This is help page',
        name: 'Kushagra'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About',
        name: 'Kushagra'
    })
})

// app.get('',(req,res) => {
//     res.send()
// })

// app.get('/about',(req,res)=>{
//     const aboutPagePath = publicDirectoryPath + '/about.html'
//     console.log(aboutPagePath)
//     app.use(express.static(aboutPagePath))
//     res.send()
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'Please provide an address'
        })
    }
    else{
        geocode((req.query.address), (error, {latitude, longitude,location} = {}) =>{
        if(error){
            return res.send({
               error
            })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({
                error
                })
            }
            console.log("Address entered: "+req.query.address)
            res.send({
                address: req.query.address,
                location,
                forecast: forecastData
            })
          })
})
    }
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
       return res.send({
            error: 'Please provide a search term'
        })
    }
    res.send({
        products: []
    })
})

// app.get('/help',(req,res) => {
//     res.send({
//         name: 'Kushagra',
//         age: 25
//     })
// })



app.get('/help/*',(req,res) => {
    res.render('notfound',{
        title: 'Page Not Found',
        name: 'Kushagra',
        errorMessage: 'The help article you are looking for is not found.'
    })
})

app.get('*',(req,res)=>{
    res.render('notfound',{
        title: 'Page Not Found',
        name: 'Kushagra',
        errorMessage: 'The page you are looking for is not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up')
})