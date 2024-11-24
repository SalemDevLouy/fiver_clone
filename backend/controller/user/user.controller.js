import jwt from 'jsonwebtoken';
import User from '../../models/mongoomodels/user.model.js'
import createError from '../../utils/createError.js';

const deleteUser = async(req,res,next) => {
    try {
        // find user by id 
        const user = await User.findById(req.params.id);
        if (!user) return next(createError(404,"User not found"));

        // verify token to make sure user is authenticated and has permission to delete their account
        jwt.verify(token,process.env.JWT, async(err,payload) => {
            if(req.userId !== user._id.toString()) {
                return next(createError(403,"You can delete only your own account"))
            }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("Your account has been deleted");
        })
        

    } catch (error) {
        next(error)
    }
}

export { deleteUser}