const mongoose = require('mongoose')

module.exports = mongoose.model('users' , {
    name:{
        type: String
    },
    email:{
        type: String,
        require: true,
        unique: true

    },
    entries:{
        type: Number,
        default:0
    },
    joined:{
        type : Date,
        default: Date.now
    }
})