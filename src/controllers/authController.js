const mongoose = require('mongoose');
const { update } = require('../models/user');

const User = mongoose.model('User');

module.exports = {
    async getUser(req, res) {
        try{
            const users = await User.find();

            res.end(JSON.stringify({users: users}));
        } catch(err){
            return res.status(400).send({ error: 'Erro ao procurar usuários' });
        }
    },

    async getUserByID(req, res) {
        try{
            const user = await User.findById(req.params.id);

            return res.json(user);
        } catch(err){
            return res.status(400).send({ error: 'Usuário não encontrado' });
        }
    },

    async getUserByIdGoogle(req, res) {
        try{
            const user = await User.findOne({ id_google: req.params.idGoogle });

            return res.json(user);
        } catch(err){
            return res.status(400).send({ error: 'Usuário não encontrado' });
        }
        
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
        try{
            const user = await User.findOneAndUpdate({id_google: req.params.idGoogle}, req.body, { new: true });

            res.end(JSON.stringify({user: user}));
        } catch(err){
            return res.status(400).send({ error: 'Erro ao atualizar usuário' });
        }
        
    },

    async destroy(req, res) {
        try{
            const user = await User.findByIdAndRemove(req.params.id);

            return res.send('Usuário removido com sucesso');
        } catch(err){
            return res.status(400).send({ error: 'Erro ao remover usuário' });
        }
        
    }
}