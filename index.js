const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/json' }))

//create a db using mongoose
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/dev-mgmt');

var devices = require('./device.js');

app.use('/devices', devices);

app.get('/',(req,res)=>{
    res.status(200).send("Server running")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));