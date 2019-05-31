const login = require('../db/models/login')
const user = require('../db/models/users')
const chalk = require('chalk')



const handle = (req,res,bcrypt) => {
	const { email, password} = req.body;
	if(!email  || !password)
	{
		return res.status(400).json('fill some thing');
	}
	login.findOne({email: email})
	.then((log) =>{
		if(log){

			const isv = bcrypt.compareSync(password, log.hash);
			if(isv){
				user.findOne({email: email})
				.then(user => res.send(user))
				.catch(console.log)
				
			}else{
				console.log(chalk.red('OK'))
				res.json(0)
			}
		}else{
			console.log(chalk.green('OKay'))
			res.status(400).json('wrong credentials')
		}
	})
	.catch(err => console.log(chalk.blue("catch")))


	
	// post.select('hash','email').from('login').where({email:email})
	// .then(user =>{
	//     const isv = bcrypt.compareSync(password, user[0].hash);

	//     if(isv)
	//     {
	//     	post.select('*').from('users').where({email:user[0].email})
	//     	.then(use => {
	//     		res.json(use[0]);
	//     	})
	//     	.catch(err => res.status(400).json(0))
	//     }
	//     else
	//     {
	//     	res.json(0);
	//     }

	// })
	// .catch(err => res.status(400).json('wrong credentials'))

}

module.exports = {
   handle:handle
};