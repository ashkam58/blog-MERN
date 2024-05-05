const express = require('express');
const app = express();

app.post('/register', (req, res)=>{
    res.json('test OK')
})

app.listen(4000, ()=>{
    console.log("app is listening to the port 4000")
})