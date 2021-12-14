
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("filmes").del()
    .then(function () {
      // Inserts seed entries
      return knex("filmes").insert([
        {titulo: "Naruto Shippuden", sinopse:"Naruto tenta trazer o seu amigo devolta para casa.", imagem:"shippuden.jpg", ano: 2007,},
        {titulo: "Naruto Classico", sinopse: "Historia de uma garoto que sonha em ser hokage.", imagem:"classico.jpg", ano: 2001,},
      ]);
    });
};
