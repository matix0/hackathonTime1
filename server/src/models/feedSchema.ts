const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userId: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Feed", feedSchema);
