const mongoose = require("mongoose");

/**
 * Category Schema
 *
 * @attributes
 * name
 * isActive
 * isDelete
*/

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});

const CategoryModel = mongoose.model("Categories", CategorySchema);

module.exports = CategoryModel;