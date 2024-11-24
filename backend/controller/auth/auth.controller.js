import jwt from 'jsonwebtoken';
import User from '../../models/mongoomodels/user.model.js'
import bcrypt from 'bcrypt'
import createError from '../../utils/createError.js';

// register function ***********************************

const register =async (req,res,next) => {
    try {
        // hash password before saving to database
        const hash = bcrypt.hashSync(req.body.password ,5)
        const newUser = new User({
            ...req.body,
            password: hash.toString(),
        });
        await newUser.save()
        res.status(201).send('User registered successfully')
    } catch (error) {
        next(error);
    }
}

// login function ********************************

const login = async (req,res,next) => {
    try {
        const user = await User.findOne({email: req.body.email} )
        if (!user) return next(createError(404,"User not found"));

        // password validation
        const validPassword = bcrypt.compareSync(req.body.password, user.password)
        if(!validPassword) return next(createError(401,'Invalid email or password'))
        
        // generate JWT token
        const token = jwt.sign(
            {
                id: user._id,
            isSaller: user.isSaller
            },
            process.env.JWT
        );
        const {password , ...info} = user._doc;

    // send jwt token as response cookie
        res.cookie("accessToken", token,
            {
                httpOnly: true,
            }
        ).status(201).send(info)
        

    } catch (error) {
        next(error);
    }
}

// logout function ****************************
const logout = async(req,res) => {
   try {
    res.clearCookie("accessToken",{
        sameSite:"none",
        secure:true,
    }).status(200).send("Logged out successfully");
   } catch (error) {
    next(error);
   }
}

export { register,login,logout}