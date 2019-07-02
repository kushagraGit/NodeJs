const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

// const request = require('request')

// const url = "https://api.darksky.net/forecast/f9d1d9eae3956740ff1cca39a0669aaf/18.5204,73.8567?units=si"

// // const options ={
// //     'url': 'https://api.darksky.net/forecast/f9d1d9eae3956740ff1cca39a0669aaf/37.8267,-122.4233',
// //     'proxy': 'http://proxy.tcs.com:8080'
// // }

// request({url: url, json: true}, (error, response) =>{
//     // const data = JSON.parse(response.body)
//     // console.log(data.currently)
//     if(error){
//         console.log("Unable to connect to weather services!")
//     }
//     else if(response.body.error){
//         console.log(response.body.error)
//     }
//     else
//     {
//         console.log(response.body.daily.data[0].summary+" It is currently "+response.body.currently.temperature+" degrees out. There is a "+response.body.currently.precipProbability+"% chance of rain.")
//     }
    
// })

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1Ijoia3VzaGFncmEtMTQiLCJhIjoiY2p4N2E0ZWJjMDR1aTN5bnZ3djBwenFkeSJ9.Ljkn3JCObA0y3FDAoVMMgQ&limit=1'

// request({url: geoUrl, json: true}, (error,response) => {
//     if(error){
//         console.log('Unable to connect to Geocode service!')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Location not found!')
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log("Geocordinates for "+response.body.features[0].place_name + " is:\nLatitude: "+latitude+", Longitude: "+longitude)
//     }
    
// })

const inputLocation = process.argv[2];
if(inputLocation === undefined){
    return console.log("Please provide location")
}
else{
    geocode(inputLocation, (error, {latitude, longitude,location}) =>{
        if(error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
})
}


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



// // console.log("Starting")

// // setTimeout(() => {
// //     console.log("Timer of 2 seconds")
// // }, 2000)

// // setTimeout(() => {
// //     console.log('0 seconds timer')
// // }, 0)

// // console.log("Ending")