const joi = require("joi");

//validate question 
const validateQuestion = (questionData) =>{
    const Schema = joi.object({
        question: joi.string().required().min(3),
        category: joi.string().required(),
        status: joi.string().valid('draft','published')
    })
    return Schema.validateAsync(questionData);
}

//validate question id
const validateQuestionId = (qesId) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(qesId);
}

module.exports ={
    validateQuestion,
    validateQuestionId
}
