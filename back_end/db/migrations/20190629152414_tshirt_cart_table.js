exports.up = function(knex, Promise) {
  return knex.schema.createTable('shirt_cart', function(tbl) {
    tbl.increments()

    tbl
      .integer('tshirt_id')
      .references('id')
      .inTable('tshirt')
      .notNullable()

    tbl
      .integer('cart_id')
      .references('id')
      .inTable('shopping_cart')
      .notNullable()

    tbl
    	.integer('small_amount')
    	.defaultTo(0)

    tbl
    	.integer('medium_amount')
    	.defaultTo(0)

    tbl
    	.integer('large_amount')
    	.defaultTo(0)  

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shirt_cart')
};