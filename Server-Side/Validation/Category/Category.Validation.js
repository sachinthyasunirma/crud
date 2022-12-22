const joi = require("joi");

//validate category id
const validateCategoryId = (qesId)=>{
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(qesId);
}

module.exports ={
    validateCategoryId
}
