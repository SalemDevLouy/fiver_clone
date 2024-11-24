
//test 
const test = async (req,res,next) => {
    const userId = req.userId || 'invalid user id'
    const isSaller = req.isSaller || 'no value'
try {
    res.status(201).send('user ID is : ' + userId 
    + "\n isSaller is : " + isSaller
    ) 
} catch (error) {
    next(error);
}
}
export {test}