const fs = require('fs');

const personalJson = fs.readFileSync('1-json.json');
console.log(personalJson.toString());
const personal = JSON.parse(personalJson);
console.log(personal);
personal.name = 'Kushagra';
personal.age = 26;
console.log(personal);

fs.writeFileSync('1-json.json',JSON.stringify(personal));


// const book = {
//     title: 'Harry Potter',
//     author: 'JK Rowling'
// }

// const bookJson = JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJson);

// const databuffer = fs.readFileSync('1-json.json');
// const dataJson = databuffer.toString();
// const book = JSON.parse(dataJson);
// console.log(book.title);


// console.log(bookJson);

// const parseData = JSON.parse(bookJson);
// console.log(parseData.title);