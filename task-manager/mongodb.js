//CRUD Operation

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewParserUrl: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Kushagra',
    //     age: 27
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to return data')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 27
        },
        {
            name: 'Gunther',
            age: 28
        }],
        (error, result)=>{
            if(error){
                return console.log('Error inserting data')
            }
            console.log(result.ops)
        }
    )
})