const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
    username: String,
    password: String,
    Email: String,
    phoneno: Number
})
const userModel = mongoose.model("usersDB", userSchema)

module.exports={ userModel }