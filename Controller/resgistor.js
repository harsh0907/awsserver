const users = require('../db/models/users')
const login = require('../db/models/login')
const chalk = require('chalk')


const handle = (req,res,bcrypt) => {
    console.log("nskdfk")
	const { name, email ,password} = req.body;
    if (  name === '' || email === '' || password === '')
    {
        return res.status(400).json('fill some thing');
	}
   const hash = bcrypt.hashSync(password);

//    new users(req.body)
//    .save().then((rse) => {
// 	   new login({email,hash}).
// 	   save()
// 	   .then(console.log)
// 	   .catch(console.log)
//    }).then(console.log)
//    .catch(console.log)



   const transaction = async () =>{
       await new login({email:email,hash:hash}).save()
      return  await new users({email:email,name:name}).save()
    
   }


   transaction().then(resp => {
       console.log(chalk.blue(resp))
       res.json(resp)
    })
   .catch(err => {
       console.log(chalk.red(err))
       res.status(200).json("unable to registor")
    })
 
    // post.transaction(trx =>{
    // 	trx.insert({
    // 		email: email,
    // 		hash:hash
    // 	})
    // 	.into('login')
    // 	.returning('email')
    // 	.then(loginemail =>{
    // 		return trx('users')
    // 		 .returning('*')
    //          .insert({
    //          	email: loginemail[0],
    //          	name: name,
    //         	joined: new Date()
    //      })
    //     .then(response =>{ 
    //     	res.json(response[0])
    //     })
        
    // })
    // 	.then(trx.commit)
    // 	.catch(trx.rollback)
    // })
    // .catch(err => res.status(200).json("unable to registor"))
}

module.exports = {
    handle: handle
};