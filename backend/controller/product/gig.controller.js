import Gig from '../../models/mongoomodels/gig.model.js'
import createError from '../../utils/createError.js';


//create gig****************************************************************

const createGig = async (req,res,next) => {
    if (!req.isSaller) {
        return next(createError(403,"only saller can create gigs")) 
        }
        
       const data = {
           userId:req.userId,
           ...req.body
       }
try {
    const newGig =  new Gig(data)
    await newGig.save()
    res.status(201).send('Gig created successfully')
} catch (error) {
    next(error);
}
}

//delete gig ****************************************************************

const deleteGig = async (req,res,next) => {
    if (!req.isSaller) {
        return next(createError(403,"only saller can delete gigs")) 
        }
       const data = {
           userId:req.userId,
           ...req.body
       }
    try {
        const gigId = req.params.gigId 
        const gig = await Gig.findById(gigId);
        if (!gig) return next(createError(404,"Gig not found"));
        if (gig.userId !== req.userId){
            return next(createError(403,"You can delete only your own gigs")) ;
        }
        
        await Gig.findByIdAndDelete(gigId)
        res.status(200).send("Your Gig  has been deleted");
    } catch (error) {
        next(error);
    }
}

//get gig *******************************************************************

const getGig = async(req,res,next) => {
    try {
        const gigId = req.params.gigId 
        const gig = await Gig.findById(gigId);
        if (!gig) return next(createError(404,"Gig not found"));
        await Gig.findById(gigId)
        res.status(200).send(gig);
        
    } catch (error) {
        next(error);
    }

}
const getGigs = async(req,res,next) => {
    const query = req.query
    const filters = {
        ...(query.userId && {userId: query.userId}),
        ...(query.cat && {cat:query.cat}),
        ...(query.min || query.max &&{price:{
            ...(query.min && { $gt: q.min }),
            ...(query.max && { $lt: q.max }),
        }}
        ),
        ...(query.search && {title: {$regex: query.search,options:"i"}}),
    }
    const gigs = await Gig.find(filters)
    res.status(200).send(gigs);
    try {
        
    } catch (error) {
        next(error);
    }
}
export {createGig,deleteGig,getGigs,getGig} ;
