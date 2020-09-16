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
            if(user){
                return res.json(user);
            }
            else{
                return res.status(400).send({ error: 'Usuário não encontrado' });
            }
        } catch(err){
            return res.status(400).send({ error: 'Erro ao buscar usuário' });
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
            if(user){
                res.end(JSON.stringify({user: user}));
            }
            else{
                return res.status(400).send({ error: 'Erro ao atualizar usuário' });
            }
        } catch(err){
            return res.status(400).send({ error: 'Erro ao atualizar usuário' });
        }
        
    },

    async updateBarcoCash(req, res) {
        try{

            if(req.body.barcos_cash == null || req.body.shipcash == null){
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

            const user = await User.findOneAndUpdate({ id_google: req.params.idGoogle}, { $push: { barcos_cash: req.body.barcos_cash }, $set: { shipcash: req.body.shipcash }}, { new: true });

            if(user){
                res.end(JSON.stringify({user: user}));
            }
            else{
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

        } catch(err){
            return res.status(400).send({ error: 'Erro ao adicionar skin' });
        }
    },

    async updateBarcoCoin(req, res) {
        try{

            if(req.body.barcos_coin == null || req.body.shipcoin == null){
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

            const user = await User.findOneAndUpdate({ id_google: req.params.idGoogle}, { $push: { barcos_coin: req.body.barcos_coin }, $set: { shipcoin: req.body.shipcoin }}, { new: true });

            if(user){
                res.end(JSON.stringify({user: user}));
            }
            else{
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

        } catch(err){
            return res.status(400).send({ error: 'Erro ao adicionar skin' });
        }
    },

    async updateRedeCash(req, res) {
        try{

            if(req.body.redes_cash == null || req.body.shipcash == null){
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

            const user = await User.findOneAndUpdate({ id_google: req.params.idGoogle}, { $push: { redes_cash: req.body.redes_cash }, $set: { shipcash: req.body.shipcash }}, { new: true });

            if(user){
                res.end(JSON.stringify({user: user}));
            }
            else{
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

        } catch(err){
            return res.status(400).send({ error: 'Erro ao adicionar skin' });
        }
    },

    async updateRedeCoin(req, res) {
        try{

            if(req.body.redes_coin == null || req.body.shipcoin == null){
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

            const user = await User.findOneAndUpdate({ id_google: req.params.idGoogle}, { $push: { redes_coin: req.body.redes_coin }, $set: { shipcoin: req.body.shipcoin }}, { new: true });

            if(user){
                res.end(JSON.stringify({user: user}));
            }
            else{
                return res.status(400).send({ error: 'Erro ao adicionar skin' });
            }

        } catch(err){
            return res.status(400).send({ error: 'Erro ao adicionar skin' });
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