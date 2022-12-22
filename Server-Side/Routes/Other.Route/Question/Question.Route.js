const express = require('express')
const router = express.Router()

//Import the Business Controller
const {
  createQuestion,
  questionGetById,
  questionGetAll,
  questionFindByString,
  questionStateChange,
  deleteQuestion,
  questionEdit
} = require('../../../Controllers/Question/Question.Controller')

/*
@Route - /create
@Desc  - Create question 
@Params- None
@Body  - Object
@Access- Public
@Method- POST
*/
router.post('/create', createQuestion)
/*
@Route - /get/all
@Desc  - Get all question 
@Params- None
@Access- Public
@Method- GET
*/
router.get('/get/all', questionGetAll)
/*
@Route - /get
@Desc  - get question by id
@Params- question_id
@Access- Public
@Method- Get
*/
router.get('/get/:question_id', questionGetById)
/*
@Route - /get
@Desc  - get question by id
@Params- question_id
@Access- Public
@Method- Get
*/
router.get('/s/get/', questionFindByString)
/*
@Route - /update
@Desc  - update isActive state false or true
@Params- question_id
@Body  - isActive 
@Access- Public
@Method- PUT
*/
router.put('/update/:question_id', questionStateChange)
/*
@Route - /edit
@Desc  - Edit question
@Params- question_id
@Access- Public
@Method- PUT
@Body  - Object 
*/
router.put('/edit/:question_id', questionEdit)
/*
@Route - /delete
@Desc  - delete question 
@Params- question_id
@Access- Public
@Method- PUT
*/
router.put('/delete/:question_id', deleteQuestion)

module.exports = router

