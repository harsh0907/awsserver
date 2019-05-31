const mongoose = require('mongoose')

module.exports = mongoose.model('login', {
    email:{
        type:String,
        require:true,
        unique: true
    },
    hash:{
        type: String,
        require: true
    }

})
