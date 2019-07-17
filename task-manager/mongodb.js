//CRUD Operation

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

// const id = new ObjectID
// console.log(id.id.length)
// console.log(id.toHexString().length)

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewParserUrl: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    
    db.collection('tasks').deleteOne({
        description: 'Iron the clothes'
    }).then((result)=>{
        console.log('Success')
    }).catch((error)=>{
        console.log(error)
    })

    client.close()
})

// db.collection('users').deleteMany({
//     age: 27
// }).then((result)=>{
//     console.log(result.modifiedCount)
// }).catch((error)=>{
//     console.log(error)
// })
// const updateManyPromise = db.collection('tasks').updateMany({
//     completed: false
// },{
//     $set:{
//         completed: true
//     }
// })

// updateManyPromise.then((result)=>{
//     console.log('Successfully updated')
// }).catch((error)=>{
//     console.log(error)
// })
// const updatePromise = db.collection('users').updateOne({
//     _id: new ObjectID("5d23a154a5611c38c0af7dbc")
// },{
//     $set:{
//         name: 'Kushagra'
//     }
// })

// updatePromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
// db.collection('tasks').findOne({_id: new ObjectID("5d2394d7f148273ddcba4460")},(error, result)=>{
//     if(error){
//         return console.log('Unable to fetch records')
//     }
//     console.log(result)
// })

// db.collection('tasks').find({completed: false}).toArray((error, result)=>{
//     if(error){
//         return console.log('Unable to find location')
//     }
//     console.log(result)
// })
// db.collection('users').findOne({_id: new ObjectID("5d23a014da49c44350460949")}/*{'name':'Bhanuja'}*/,(error, result)=>{
    //     if(error){
    //         console.log('Error finding records')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').find({age: 23}).toArray((error, result)=>{
    //     if(error){
    //         console.log('Unable to find data')
    //     }
    //     console.log(result)
    // })
    
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Bhanuja',
    //     age: 23
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to return data')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 27
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 28
    //     }],
    //     (error, result)=>{
    //         if(error){
    //             return console.log('Error inserting data')
    //         }
    //         console.log(result.ops)
    //     }
    // )

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Iron the clothes",
    //         completed: false
    //     },
    //     {
    //         description: "Pack the bags",
    //         completed: false
    //     },
    //     {
    //         description: "Keep the tickets",
    //         completed: false
    //     }
    // ],
    // (error, result)=>{
    //     if(error){
    //         return console.log('Error inserting data')
    //     }
    //     console.log(result.ops)
    // })