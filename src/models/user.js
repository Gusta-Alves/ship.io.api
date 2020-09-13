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
        default: 150,
    },
    shipcash: {
        type: Number,
        required: true,
        default: 150,
    },
    barcos_cash: {
        type: [Number],
        required: true,
        default: [],
    },
    barcos_coin: {
        type: [Number],
        required: true,
        default: [11],
    },
    redes_cash: {
        type: [Number],
        required: true,
        default: [],
    },
    redes_coin: {
        type: [Number],
        required: true,
        default: [22],
    },
    barco_atual:{
        type: Number,
        required: true,
        default: 11,
    },
    rede_atual:{
        type: Number,
        required: true,
        default: 22,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;