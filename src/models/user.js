const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id_google: {
        type: String,
        required: true,
        unique: true,
    },
    shipcoin: {
        type: Number,
        required: true,
    },
    shipcash: {
        type: Number,
        required: true,
    },
    barcos_cash: {
        type: [Number],
        required: true,
    },
    barcos_coin: {
        type: [Number],
        required: true,
    },
    redes_cash: {
        type: [Number],
        required: true,
    },
    redes_coin: {
        type: [Number],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;