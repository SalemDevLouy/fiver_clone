// controllers/productController.js
import ProductFactory from '../../models/Factory/ProductFactory'
import Gig from '../../models/mongoomodels/gig.model.js'
import createError from '../../utils/createError.js';


const addProduct = async (req, res,next) => {
    try {
        const { productType, args } = req.body;
        const product = ProductFactory.createProduct(productType, ...args);
        const newGig = new Gig(product.getDataObject());
        await newGig.save()
        res.status(201).json({ success: true, details: product.getDetails() });
    } catch (error) {
        return next(createError(400,error.message));
        
    }
};

module.exports = { addProduct };
