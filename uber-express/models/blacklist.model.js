const mongoose = require('mongoose');

const blacklistTokenScheam = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 120, // 24 hours in seconds - 86400, 2 minutes in seconds - 120
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenScheam);