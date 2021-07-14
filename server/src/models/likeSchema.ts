const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    postId: {
        ref: 'Feed',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

})

export default mongoose.model("Like", likeSchema);
