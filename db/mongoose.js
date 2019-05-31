const mongoose = require('mongoose')

 
mongoose.connect('mongodb://127.0.0.1:5000/face',{
    useNewUrlParser: true,
    useCreateIndex: true
})
