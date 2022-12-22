const questionModel = require('../../Models/Question/Question.Model');
const categoryModel = require('../../Models/Category/Category.Model');
const { validateQuestion, validateQuestionId } = require('../../Validation/Question/Question.Validation');
const { model } = require('mongoose');

//create question
const createQuestion = async (req, res) => {
    try {
        //validate credentials 
        await validateQuestion(req.body)

        //save db
        const newQuestion = await questionModel.create({
            ...req.body,
        })
        //sucess 
        return res.status(201).json({
            status: "success"
        })

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

const questionGetById = async (req, res) => {
    try {
        const {
            question_id//question Id
        } = req.params

        //validate question id
        const valid = await validateQuestionId({ _id: question_id });

        //find by question id
        const question = await questionModel.find({ _id:question_id, isDelete:false })
        
        return res.status(200).json({
            data: question,
            message: "success"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Question is not found"
        })
    }
}

const questionGetAll = async (req, res) => {
    try {
        // find all questions 
        const questions = await questionModel.find({ isDelete: false }).populate('category');

        return res.status(200).json({
            data: questions,
            message: "success"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Questions are not found"
        })
    }
}

const questionFindByString = async (req, res) => {
    //get all questions 
    try {
        const searchString = req.query.searchString
        const page = req.query.page || 0;
        const perPageRows = req.query.perPageRows
        console.log('page',page);
        console.log('perPageRows',perPageRows);
        if(searchString == undefined){
            searchString = " "
        }

        // const questions = await questionModel.find({
        //     question: { $regex: searchString, $options: "i" },
        //     isDelete: false
        // }).skip((page-1)*perPageRows).limit(perPageRows).populate('category');
        const questions = await questionModel.find({
            question: { $regex: searchString, $options: "i" },
            isDelete: false
        }).populate('category');

        console.log(questions.length);
        if(questions.length == 0){
            return res.status(200).json({
                data: questions,
                message: `No Question matched with ${searchString}`
            })
        }
        return res.status(200).json({
            data: questions,
            message: 'success'
        })
    }
    catch (error) {
        return res.status(404).json({
            test: req.query,
            message: error
        })
    }
}

const questionStateChange = async (req, res) => {
    try {
        //param
        const {
            question_id//question Id
        } = req.params

        //body
        const {
            isActive
        } = req.body

        //validate question id
        const valid = await validateQuestionId({ _id: question_id });

        //find by question id
        const question = await questionModel.findByIdAndUpdate(question_id, { isActive })

        return res.status(200).json({
            data: question,
            message: "success"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Question is not found"
        })
    }
}

const questionEdit = async (req, res) => {
    try {
        //param
        const {
            question_id//question Id
        } = req.params
        console.log(req.body);
        //validate question id
        const valid = await validateQuestionId({ _id: question_id });

        //find by question id
        const question = await questionModel.findByIdAndUpdate(question_id, {...req.body})

        return res.status(200).json({
            data: question,
            message: "success"
        })
    } catch (error) {
        return res.status(404).json({
            message: "Question is not found"
        })
    }
}

const deleteQuestion = async (req, res) => {
    try {
        //param
        const {
            question_id//question Id
        } = req.params

        //validate question id
        const valid = await validateQuestionId({ _id: question_id });

        //find by question id
        const question = await questionModel.findByIdAndUpdate(question_id, { isDelete:true })

        return res.status(200).json({
            data: question,
            message: "success"
        })

    } catch (error) {
        return res.status(404).json({
            message: "Question is not found"
        })
    }

}

module.exports = {
    createQuestion,
    questionGetById,
    questionGetAll,
    questionFindByString,
    questionStateChange,
    deleteQuestion,
    questionEdit
}