exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(tbl) {
    tbl.increments()

    tbl
      .string('date')

    tbl
    	.string('description')
    	.notNullable()

    tbl
    	.string('image')

    tbl
      .integer('tshirt_id')
      .references('id')
      .inTable('tshirt')
      .notNullable()

    tbl
      .string('posted_by')
      .defaultTo('guest')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};