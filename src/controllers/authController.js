const mongoose = require('mongoose');
const { update } = require('../models/user');

const User = mongoose.model('User');

module.exports = {
    async getUser(req, res) {
        const users = await User.find();

        res.end(JSON.stringify({users: users}));
    },

    async getUserByID(req, res) {
        const user = await User.findById(req.params.id);

        res.end(JSON.stringify({user: user}));
    },

    async getUserByIdGoogle(req, res) {
        const user = await User.findOne({ id_google: req.params.idGoogle });

        res.end(JSON.stringify({user: user}));
    },

    async createUser(req, res) {
        try{
            const user = await User.create(req.body);
            res.end(JSON.stringify({user: user}));
        } catch(err){
            return res.status(400).send({ error: 'Falha no registro' });
        }
    },

    async updateUser(req, res) {
        const user = await User.findOneAndUpdate({id_google: req.params.idGoogle}, req.body, { new: true });

        res.end(JSON.stringify({user: user}));
    },

    async destroy(req, res) {
        const user = await User.findByIdAndRemove(req.params.id);

        return res.send('Usuário removido com sucesso');
    }
}