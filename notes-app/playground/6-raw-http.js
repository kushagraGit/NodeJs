const https = require('https')

const url = 'https://api.mapbox.cm/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1Ijoia3VzaGFncmEtMTQiLCJhIjoiY2p4N2E0ZWJjMDR1aTN5bnZ3djBwenFkeSJ9.Ljkn3JCObA0y3FDAoVMMgQ&limit=1'


const raw= https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end',() => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

raw.on('error',(error) =>{
    console.log("An error occurred",error)
})

raw.end()