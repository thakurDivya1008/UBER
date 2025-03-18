const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    //now you have to decrypt the token
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }
     
    const isBlacklisted = await blackListTokenModel.findOne({token: token});

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'});
        }
    //decrypt the token
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id)
        req.user = user;
        return next();
    }
    catch(err){
        return res.status(401).json({message: 'Unauthorized'});
    }





};