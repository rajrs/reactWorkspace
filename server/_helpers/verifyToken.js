
const config = require('config.json');
const jwt = require('jsonwebtoken');

const { secret } = config;

function verifyToken(req, res, next) {
    // Get auth header value
     const bearerHeader = req.headers['authorization'];
     console.log(bearerHeader)
   
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        console.log(bearerToken);
        //req.token = bearerToken;
        // Next middleware
        //next();
        jwt.verify(bearerToken, config.secret, function(err, decoded) {
            if (err)
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });                  
                // if everything good, save to request for use in other routes
                console.log(decoded)
                req.userDetail = decoded;
              next();
            });
            
    } else{
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    //non working
    var token = req.headers['x-access-token'];
    // if (!token)
    //   return res.status(403).send({ auth: false, message: 'No token provided.' });
      
    //   jwt.verify(token, config.secret, function(err, decoded) {
    //     if (err)
    //     return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
          
    //     // if everything good, save to request for use in other routes
    //     req.userId = decoded.id;
    //   next();
    // });
  }
  
  module.exports = verifyToken;