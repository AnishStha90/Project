const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const menuSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
        trim: true
    },
    item_price: {
        type: Number,
        required: true
    },
    item_description: {
        type: String,
        required: true
    },
    item_image: {
        type: String,
    },

    rating: {
        type: Number,
        default: 1
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });

module.exports = mongoose.model("Menu", menuSchema);
