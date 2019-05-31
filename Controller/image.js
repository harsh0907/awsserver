const Clarifai = require('clarifai');
const users = require('../db/models/users')


const app = new Clarifai.App({
 apiKey: '294216f93d144526b0136bf6d7c741e7'
});


const handleurl =  (req,res) =>
{
	app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      req.body.input).then(data => {res.json(data);
      } )
      .then(err => res.status(404).json('unable api'));

}


const handle = (req,res,bcrypt)=>{
 
	console.log(req.body._id)
	
	users.findByIdAndUpdate(req.body._id, { $inc: { entries: 1 } }, {new:true})
	.then(console.log)
	.catch(console.log)

	// const { id } = req.body;
	// post('users').where('id','=', id)
	// .increment('entries',1)
	// .returning('entries')
	// .then(user => {res.json(user[0]);
	// })
	// .catch(err => res.status(400).json('not found'));
}
 

module.exports = {
	handle:handle,
	handleurl:handleurl
};