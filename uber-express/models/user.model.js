const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            require: true,
            minlenght: [3, 'first name must be at least 3 character long'],
        },
        lastName: {
            type: String,
            minlenght: [3, 'last name must be at least 3 character long'],
        }
    },
    email: {
        type: String,
        require: true,
        minlength: [5, 'email must be at least 5 character long'],
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    socketId: {
        type: String
    },
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token;
}

userSchema.methods.comparePasswoerd = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;