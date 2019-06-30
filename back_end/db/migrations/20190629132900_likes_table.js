exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', function(tbl) {
    tbl.increments()

    tbl
    	.integer('user_id')
    	.unique('user_id')

    tbl
      .integer('tshirt_id')
      .unique('tshirt_id')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes')
};