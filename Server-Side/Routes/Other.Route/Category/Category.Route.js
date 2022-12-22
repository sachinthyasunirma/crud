const express = require('express')
const router = express.Router()

//Import the Business Controller
const {
    categoryGetAll,
    categoryCreate
} = require('../../../Controllers/Category/Category.Controller')

/*
@Route - /create
@Desc  - Create category 
@Params- None
@Access- Public
@Method- POST
*/
router.post('/create', categoryCreate)

/*
@Route - /get/all
@Desc  - Get all category 
@Params- None
@Access- Public
@Method- GET
*/
router.get('/get/all', categoryGetAll)

module.exports = router