
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("personagens").del()
    .then(function () {
      // Inserts seed entries
      return knex("personagens").insert([
        { nome: "Kakashi Hatake", imagem: "kakashi.jpg"},
        { nome: "Obito Uchiha", imagem: "obito.jpg"},
        { nome: "Naruto Uzumaki", imagem: "naruto.jpg"},
        { nome: "Itachi Uchiha", imagem: "itachi.jpg"},
        { nome: "Sasuke Uchiha", imagem: "sasuke.jpg"},

      ]);
    });
};
