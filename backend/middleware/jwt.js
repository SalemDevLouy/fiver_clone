import createError from "../utils/createError.js";
import jwt from 'jsonwebtoken';
export const verifyToken = (req,res,next)=>{
    const token = req.cookies.accessToken;
        if (!token) return next(createError(401,"you are not authenticated")) ;

        jwt.verify(token,process.env.JWT, async(err,payload) => {
            if (err) return next(createError(403,"Token is invalid"))
            req.userId = payload.id
            req.isSaller = payload.isSaller
            next();
        })
        

}