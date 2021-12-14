
exports.up = function(knex) {
    return knex.schema.createTable("animes", (table) => {
        table.increments().primary();
        table.string("titulo");
        table.string("sinopse");
        table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("animes");
  };