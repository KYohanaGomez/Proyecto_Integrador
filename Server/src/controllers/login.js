const users = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query;
    
    // if(users.email === email && users.password === password){
    //     return res.status(200).json({access: true})
    // }
    // res.status(403).json({access:false})

    const userFound = users.find((user) => user.email === email && 
    user.password === password)

    return userFound ? res.status(200).json({access: true}):
    res.status(404).json({access:false})

}

module.exports = login;

