const express = require('express') // import express
const app = express() // create express app
const router = require('./routes/Router') // import router
const path = require('path')  // import path

app.set('views',path.join(__dirname,'views')) // set views
app.set('view engine','ejs') // set view engine
app.use(express.urlencoded({ extended:false })); //
app.use(router) // use router
app.use(express.static(path.join(__dirname,'public'))) // use static file

app.listen(3001, () => {
    console.log("Run server at port 3001"); // run server
})
