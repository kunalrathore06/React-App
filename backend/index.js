const express = require("express");

const app = express();

const expresslayout = require("express-ejs-layouts");


app.use(expresslayout);

app.set('layout expressStyles', true);

app.set('layout extractScripts', true);

const dotenv =  require("dotenv")

const route = require('./routes')

app.use('/', route)

// set up a view engine
app.set('view engine', 'ejs');

app.set('views','./views');

app.use(express.urlencoded());

dotenv.config();

app.get('/',(req,res) => {
    res.send("our api is running successfully!")
})


const port = process.env.port || 9000;

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`)
    }
    console.log(`Server is running on server ${port}`)
})