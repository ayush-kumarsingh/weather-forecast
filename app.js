const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')

//listening on port 3000
app.listen(3000, 'localhost')


app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/images'))
app.use(express.urlencoded())



mongoose.connect('mongodb://localhost:27017/weather_contact_info')
.then(()=>{
    console.log('connected successfully');
})
.catch(()=>{
    console.log('some error occured');
})



var userschema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    message: String
})
var usermodel = mongoose.model('model', userschema);



app.get('/', (req, res) => {
    res.status(200).sendFile('public/index.html', { root: __dirname });
})
app.get('/about', (req, res) => {
    res.status(200).sendFile('public/about.html', { root: __dirname })
})
app.get('/technical', (req, res) => {
    res.status(200).sendFile('public/technical.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
    res.status(200).sendFile('public/contact.html', { root: __dirname })
})
app.post('/contact', (req, res) => {
    console.log(req.body);
    var data = new usermodel({
        name: req.body.urname,
        age: req.body.urage,
        email: req.body.uremail,
        message: req.body.urmsg
    });
    data.save();
    res.sendFile('public/contact.html', { root: __dirname });
})
