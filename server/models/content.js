const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Content', contentSchema);

