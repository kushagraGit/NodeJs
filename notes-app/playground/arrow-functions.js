// const square = function (x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// console.log(square(11))
const event = {
    name: 'Learning Node JS',
    componen: ['yargs','chalk','validator'],
    nodejslearn(){
        console.log("Kushagra is ",this.name)

        this.componen.forEach((learn) => {
            console.log(learn + " is completed and " + this.name)
        })
    }
}

console.log(event.nodejslearn())