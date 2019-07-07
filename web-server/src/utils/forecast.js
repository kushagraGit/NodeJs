const request = require('request')

const forecast = ((latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f9d1d9eae3956740ff1cca39a0669aaf/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'

    request({url: url, json: true},(error, response) => {
        if(error){
            callback('Unable to connect to forecast service',undefined)
        }
        else if(response.body.error){
            callback(response.body.error,undefined)
        }
        else{
            const {summary,temperatureMin,temperatureMax} = response.body.daily.data[0]
            const {temperature,precipProbability} = response.body.currently
            callback(undefined,(summary+' It is currently '+temperature+' degrees out. There is a '+(precipProbability*100)+'% chance of rain.\nMaximum Temperature will be '+temperatureMax+' & Minimum temperature will be '+temperatureMin+', today.'))
        }
    })
})

module.exports = forecast