exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', function(tbl) {
    tbl.increments()

    tbl
      .string('category_name')
      .notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category')
};