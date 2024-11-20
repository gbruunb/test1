const mongoose = require('mongoose'); // import mongoose
const dbUrl = 'mongodb://localhost:27017/PEARLS' // database url

mongoose.connect(dbUrl, {}).catch(err => console.log(err)) // connect to database

let PEARLSchema = mongoose.Schema({ // create schema
    username: String,
    password: String,
})

let user = mongoose.model("users", PEARLSchema) // create model

module.exports = {user} // export model

module.exports.saveCode = function(model,data) { // save data
    model.save(data)
}
