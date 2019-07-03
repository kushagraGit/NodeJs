const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index')
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
    res.send({
        location: 'Pune',
        forecast: 'Partly cloudy'
    })
})

// app.get('/help',(req,res) => {
//     res.send({
//         name: 'Kushagra',
//         age: 25
//     })
// })

app.listen(8080, () => {
    console.log('Server is up')
})