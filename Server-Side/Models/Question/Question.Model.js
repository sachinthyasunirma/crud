const mongoose = require("mongoose");

/**
 * Question Schema
 *
 * @attributes
 * question
 * category
 * status
 * isActive
 * isDelete
*/

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Please provide your question'],
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Categories",
        required: [true, 'Please provide your category'],
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const QuestionModel = mongoose.model("Questions", QuestionSchema);

module.exports = QuestionModel;