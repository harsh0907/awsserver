const user = require('../db/models/users')
const chalk = require('chalk')

const handle = (req,res)=>{
	const {id} = req.params;
    console.log(id)
	user.findOne({_id:id})
	.then(resp => {
		if(resp){
			res.json(resp)
		}else{
			res.status(400).json('not found')
		}
	})
	.catch(err => res.status(400).json("error"))



	// post.select('*').from('users').where({_id:_id})
	// .then(user => {
    //       if(user.length)
    //       {
    //       	 res.json(user[0])
    //       }
    //       else
    //       {
    //       	res.status(400).json('not found');
    //       }

	// 	})
	// .catch(err => res.status(400).json("error"))
}

module.exports = {
	handle:handle
};

