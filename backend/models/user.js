
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type : String,
        required : true
    },
    name: {
        type: String,
        required:true
    }
},{
    timestamp :true
})

const user = mongoose.model('user',userSchema)

module.exports = user;