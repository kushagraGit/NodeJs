console.log('Client side javascript')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

weatherForm.addEventListener('submit',(e)=>{
    messageOne.textContent = 'Please wait...'
    messageTwo.textContent = ''
    e.preventDefault()
    const location = search.value
    console.log(location)
    const url = '/weather?address='+encodeURIComponent(location)
    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            return messageOne.textContent = data.error
        }
        messageOne.textContent = 'Location: ' + data.location
        messageTwo.textContent = 'Forecast: ' + data.forecast
        //console.log("Location: "+data.location+"\nForecast: "+data.forecast)
    })
})
})

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1Ijoia3VzaGFncmEtMTQiLCJhIjoiY2p4N2E0ZWJjMDR1aTN5bnZ3djBwenFkeSJ9.Ljkn3JCObA0y3FDAoVMMgQ&limit=1'
// //

// fetch(geocodeUrl).then((response)=>{
//     response.json().then((data)=>{
//         console.log(data.features[0])
//         const {center, place_name} = data.features[0]
//         const forecastUrl = 'https://api.darksky.net/forecast/f9d1d9eae3956740ff1cca39a0669aaf/'+encodeURIComponent(center[1])+','+encodeURIComponent(center[0])+'?units=si'
//         console.log("forecast Url: ",forecastUrl)
//         fetch(forecastUrl).then((resp)=>{
//             resp.json().then((dt)=>{
//                 console.log(dt)
//             })
//         })
//     })
// })