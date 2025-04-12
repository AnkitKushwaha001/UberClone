const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            require: true,
            minlenght: [3, 'Firstname must be at least 3 character long'],
        },
        lastName: {
            type: String,
            minlenght: [3, 'Lastname must be at least 3 character long']
        },
    },
    email: {
        type: String,
        require: true,
        unique: true, 
        lowercase: true,
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
    },
    password: {
        type: String, 
        require: true,
        select: false
    },
    soketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive', 
    },
    vehicle: {
        color: {
            type: String,
            require: true,
            minlenght: [3, 'Color must be at least 3 character long'],
        },
        plate: {
            type: String,
            require: true,
            minlenght: [3, 'Color must be at lest 3 character long'],
        },
        capacity: {
            type: Number,
            require: true,
            minlenght: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            require: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
});


captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token;
}

captainSchema.methods.comparePasswrod = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}


const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;