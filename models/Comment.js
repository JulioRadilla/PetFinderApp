const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    commentText: {
        type: String,
        required: true,    
    },
    petId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

module.exports = mongoose.model('Comment', CommentSchema)