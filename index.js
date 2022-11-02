const dotenv = require('dotenv')
dotenv.config()


const mongodb = require('mongodb');
const { mongo } = require('mongoose');



const connectionstring = "mongodb+srv:/Dwayne:mongodb+srv://<username>:<password>@cluster0.m3b5r9h.mongodb.net/?retryWrites=true&w=majority@cluster0.m3b5r9h.mongodb.net/?retryWrites=true&w=majority"


mongodb.connect(process.env.CONNECTIONSTRING, function(err, client){

    // const db = client.db()
    // const results = await db.collection("pets").find().toArray()
    // console.log(results)

})

