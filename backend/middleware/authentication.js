
import bcrypt  from 'bcryptjs'
import jwt  from 'jsonwebtoken'
import User from '../models/User.js'

const authMiddleware = (req, res, next) => {
	//check for the token
	const authenticationheader = req.headers.authorization


    if (!authenticationheader || !authenticationheader.startsWith('Bearer ')) {
    	res.status(403).json({messsage:'Please provide the token. No token has been provided'})

    }

    //get the token
    const token = authenticationheader.split(' ')[1];

    // Verify the token being gotten from the header
    try {
    	const Verifiedtoken = jwt.verify(token, process.env.JWT_CODE)
      if (!Verifiedtoken) {
        res.status(403).json({messsage:'Please provide a valid token'})
      }

      const {userId, role,name, username} = Verifiedtoken

      req.user = {userId, role,name, username}
      next()

    } catch(err) {
         res.status(403).json({messsage:'Not authorized to access this route'})
    }
    
}

// middleware for only admin
const adminMiddleware = (req, res, next) => {
   if (!req.user && !(req.user.role === 'admin')) {
      res.status(403).json({messsage:'You can"t acccess this route'})
   }
   next()
   
}


// middleware for only admin and seller
const sellerAdminMiddleware = (req, res, next) => {
   if (!req.user && !(req.user.role === 'admin' || req.user.role === 'seller')) {
      res.status(403).json({messsage:'You can"t acccess this route'})
   }
   next()
   
}

export {
   adminMiddleware,
   authMiddleware,
   sellerAdminMiddleware
} 

















