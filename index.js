const dotenv = require('dotenv')
dotenv.config()


const mongodb = require('mongodb');
// const { mongo } = require('mongoose');





mongodb.connect(process.env.CONNECTIONSTRING, {useUnifiedTopology:true},async function(err, client){
const db = client.db()

// read
// const results = await db.collection("Users").find({Name:"Jason"}).toArray();
const students = db.collection("Users")

//create
// await students.insertOne({Name:"Jenny",School:"Barton"})

//update
// await students.updateOne({_id:mongodb.ObjectId("636467b9729ee74e9c853475") }, {$set:{Name:"Rae"}})
// console.log("Added new student")
 

// delete
await students.deleteOne({_id:mongodb.ObjectId("636467b9729ee74e9c853475") })

client.close()

})

