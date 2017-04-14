
module.exports = {
    

 login : function(req,res,next){
console.log(req.body.name);
     var foundUser = false; 
            users.filter(function(user){
                if(req.body.name === user.name && req.body.password === user.password){
                    req.session.currentUser = user;
            
            console.log(req.session);

                    foundUser=true;
                    res.send({ userFound: true });
                }
            });
            if (!foundUser){
                res.send({ userFound: false });
            }
 }
    
};


var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

