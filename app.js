const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

//connect to the mongodb
//mongo: is the name of the mongo image
mongoose.connect('mongo://db url',{useNewUrlParser:true})
.then(()=>{
    console.log('mongodb connected successfully')
})
.catch(err=>{
    console.log('mondodb error: ', err)
})

//a simple get request
app.get('/',(req,res)=>{
    res.send('Hello World and Kevin');
});


app.post('/api',(req,res)=>{
    const newItem = new newItem({
        name:req.body.name
    });
});

const port = 3000;
