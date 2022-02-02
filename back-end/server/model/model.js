const mongoose= require('mongoose');

var user = new mongoose.Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
})


const userDB = mongoose.model('userdb',user)

module.exports=userDB