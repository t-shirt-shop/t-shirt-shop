exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', function(tbl) {
    tbl.increments()

    tbl
      .string('date')

    tbl
      .integer('user_id')
      .references('id')
      .inTable('users')
      .defaultTo(-1)

    tbl
      .integer('total')
      .notNullable()

    tbl
    	.string('description')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order')
};