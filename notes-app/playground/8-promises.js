const workWithPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ABCD')
        //reject('Error')
    }, 2000)
})

workWithPromise.then((result)=>{
    console.log('Success',result)
}).catch((error) => {
    console.log(error)
})