//use token generated from user to authenticate and get items from its cart

import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        resizeBy.json({success:false, message:"Not Authorized, login again"})
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}

export default authMiddleware;