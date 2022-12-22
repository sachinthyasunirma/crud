const express = require('express');
const router = express.Router();
/*
@Route - /question
@Desc  - Question Route
*/
const questionRoute = require('../Other.Route/Question/Question.Route');
router.use("/question",questionRoute);

/*
@Route - /category
@Desc  - Category Route 
*/
const categoryRoute = require('../Other.Route/Category/Category.Route');
router.use("/category",categoryRoute);

module.exports = router;