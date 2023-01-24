const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

let myName = 'Kevin';



app.get('/', function (req, res) {
  //res.send('Hello World, Kevin likes November!')

    res.send(`<h3> Hi, ${myName} </h3>`)
  
})

app.get('/show', (req, res) =>{

    res.sendFile('index.html' , { root : __dirname});
    
})

app.get('/ejs', (req,res) => {
    
    res.render('index');
})
 
app.listen(PORT)
