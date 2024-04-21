const express = require("express");
const phones = require('./phones.json');
const cors = require('cors');



const app = express();
const port = 3000;


app.use(cors())
app.get('/', (req, res)=>{
    res.send('Hello World from nodemon')
});

app.get('/data', (req, res)=>{
    res.send('All the data you want is here bro......')
})

app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log('requested for id :', id);
    // const index = id - 1;
    // res.send(phones[index])

    const phone = phones.find(phone => phone.id === id);
    res.send(phone)


})



app.listen(port, ()=>{
    console.log(`Hello world is listening from ${port}`);
})