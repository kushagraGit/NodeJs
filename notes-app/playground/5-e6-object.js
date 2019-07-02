const name = 'Kushagra'
const userAge = 25

const user = {
    name: name,
    age: userAge,
    location: 'Pune'
}

console.log(user)

const prod = {
    label: 'Jet Airways',
    price: 40,
    stock: 5,
    buyPrice: 35
}

const {label, stock} = prod
console.log(label)
console.log(stock)

const product = ((type, {label, price, stock}) =>{
    console.log(type,label,price,stock)
})

product('NSE',prod)