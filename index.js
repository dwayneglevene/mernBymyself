const dotenv = require('dotenv')
dotenv.config()


const mongodb = require('mongodb');
// const { mongo } = require('mongoose');





mongodb.connect(process.env.CONNECTIONSTRING, {useUnifiedTopology:true},async function(err, client){
const db = client.db()
const results = await db.collection("Users").find().toArray();
console.log(results)
client.close()

})

