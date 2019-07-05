const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoia3VzaGFncmEtMTQiLCJhIjoiY2p4N2E0ZWJjMDR1aTN5bnZ3djBwenFkeSJ9.Ljkn3JCObA0y3FDAoVMMgQ&limit=1'

    request({url: url, json: true},(error, response) => {
        if(error){
            callback('Unable to connect to Geocode service')
        }
        else if(response.body.features.length === 0){
            callback('Location not found',undefined)
        }
        else{
            // const latitude = response.body.features[0].center[1]
            // const longitude = response.body.features[0].center[0]
            // callback(undefined,("Geocordinates for "+response.body.features[0].place_name + " is:\nLatitude: "+latitude+", Longitude: "+longitude))
            const {center, place_name} = response.body.features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name 
            })
        }
    })
}

module.exports = geocode