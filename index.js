const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World 292')
});

app.get('/data', (req, res)=>{
    res.send('All the data you want is here bro......')
})

app.listen(port, ()=>{
    console.log(`Hello world is listening from ${port}`);
})