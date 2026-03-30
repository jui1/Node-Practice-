const { validationResult } = require("express-validator");



const validateRequest = (req, res , err) =>{
    const errors = validateRequest(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            message :"validation error",
            errors : errors.array(),
        })
    }

    next();

}


module.exports = validateRequest;