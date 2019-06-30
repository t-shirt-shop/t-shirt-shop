exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_cart', function(tbl) {
    tbl.increments()

    tbl
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shopping_cart')
};