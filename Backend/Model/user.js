const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneno: { type: String, required: true }
});

const userModel = mongoose.model("usersdbs", userSchema);

module.exports = { userModel };
