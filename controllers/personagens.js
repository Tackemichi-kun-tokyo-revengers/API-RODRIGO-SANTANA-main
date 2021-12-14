const knex = require("../database/connection");

exports.getAll = async function (req, res) {
    const personages = await knex("personagens");
    const personagensComImagens = personagens.map((ator) => {
        personagem.imagem = '${process.env.PERSONAGENS_UPLOADS}/${personagem.imagem}'; 
        return personagem;
    });
    res.json(personagensComImagens);
};

exports.getOne = async function (req, res) {
    const personagem = (
    res.json( await knex("personagens").where({ id: req.params.id}))
    )[0];
    personagem.imagem = `${process.env.PERSONAGENS_UPLOADS}/${personagem.imagem}`;
    res.json(personagem);
};

exports.create = async function (req, res) {
    const result = await knex("personagens").insert(req.body); 
    res.json(result);
};

exports.update = async function (req, res) {
    res.json(await knex("personagens").where({ id: req.params.id}).update(req.body));
};

exports.remove = async function (req, res) {
    res.json(await knex("personagens").where({ id: req.params.id}).del());
}