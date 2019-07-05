console.log('Client side javascript')

fetch('https://api.darksky.net/forecast/f9d1d9eae3956740ff1cca39a0669aaf/18.52361,73.84778?units=si').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})