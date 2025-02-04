const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
    {
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        latestMsg: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    },
    { timestamps: true }
);
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
