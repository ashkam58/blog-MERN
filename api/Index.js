const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')

 mongoose.connect('mongodb+srv://ashkam58:khuljasimsimmernblog123@mern-blog-cluster.bmr5rx7.mongodb.net/?retryWrites=true&w=majority')

app.use(cors());
app.use(express.json());

app.post('/register', async(req, res)=>{
    const{username, password} = req.body;
    const userDoc = await User.create({
        username, password
    })
    
    res.json(userDoc);
    console.log(username, password)
})

app.listen(4000, ()=>{
    console.log("app is listening to the port 4000")
})                      


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ashkam58:khuljasimsimblog123@mern-blog-cluster.bmr5rx7.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
