const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const registor = require('./Controller/resgistor');
const signin = require('./Controller/signin');
const profile = require('./Controller/profile');
const image = require('./Controller/image');
require('./db/mongoose')





// const post = knex({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });



const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/' , (req,res) =>{ res.send("It's working") })

app.get('/profile/:id' , (req,res) => { profile.handle (req,res)})

app.post('/signin' , (req,res) => { signin.handle (req,res,bcrypt)});
  
app.post('/registor' ,(req,res) => { registor.handle (req,res,bcrypt)});

app.put('/image' , (req,res) => { image.handle (req,res,bcrypt)} );

app.post('/imageurl' , image.handleurl);

app.listen(3000,()=>{
  console.log(`server is running`)
});

