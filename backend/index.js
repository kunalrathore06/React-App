const express = require("express");

// const db = require('./config/mongoose');

const cookieParser = require("cookie-parser")

const expresslayout = require("express-ejs-layouts");

const path = require('path');
const fs = require('fs');

// const Tasks = require('./models/tasks');

// const UserData = require('./models/user');
const app = express();

// console.log("this is our db",db);

port = 9000;

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expresslayout);

// extract style and scripts from sub pages into the layouts

app.set('layout expressStyles', true);

app.set('layout extractScripts', true);



// app.use("react")
// set up a view engine
app.set('view engine', 'ejs');

app.set('views','./views');

app.set('views', path.join(__dirname, 'views'));

// Debugging output of file directory
// console.log('Current working directory:', __dirname);
// console.log('Files in the views directory:', fs.readdirSync(path.join(__dirname, 'views')));

app.use('/',require('./routes'));   



app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`)
    }
    console.log(`Server is running on server ${port}`)
})