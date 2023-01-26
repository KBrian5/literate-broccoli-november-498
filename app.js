const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

let myName = 'Kevin';



app.get('/',  function (req, res) {
  //res.send('Hello World, Kevin likes November!')

    

 res.send(`<h3> Hi, ${myName} </h3>`)
  
})

app.get('/show', (req, res) =>{

    res.sendFile('index.html' , { root : __dirname});
    
})
    console.log("before app dot get to slash ejs", myName);
app.get('/ejs', (req,res) => {
    
    res.render('index', { myName: myName } ); //left one is ejs, right side is node land
    console.log("after res render /ejs", myName);
    
    

})

app.get('/name', (req,res) => {

    console.log("in get to slash name", req.query.ejsFormName);
})
 
app.listen(PORT)
