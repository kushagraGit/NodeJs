const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://13.59.247.93:27017/task-manager-api',{
    useNewParserUrl: true,
    useCreateIndex: true
})

// const Task = mongoose.model('Tasks',{
//     description:{
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const tasksData = new Task({
//     description: 'Compile the code',
//     completed: false
// })

// tasksData.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const User = mongoose.model('User',{
    name: {
        type: String,
        trim: true
    },
    email:{
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error('Invalid Email')
          }
      }
    },
    age: {
        type: Number,
        default: 0
    }
})

const me = new User({
    name: 'Kushagra Asthana',
    email: 'kushagra661@gmail.com',
    age: 26
})

me.save().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})