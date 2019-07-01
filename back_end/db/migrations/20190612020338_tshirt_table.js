exports.up = function(knex, Promise) {
  return knex.schema.createTable('tshirt', function(tbl) {
    tbl.increments()

    tbl
      .string('shirt_name')
      .notNullable()
      .unique('shirt_name')

    tbl
      .string('image_url')

    tbl
      .string('description')
      .notNullable()

    tbl
      .integer('category_id')
      .references('id')
      .inTable('category')
      .notNullable()

    tbl
      .boolean('on_sale')
      .defaultTo(false)

    tbl
      .decimal('sale_percent')

    tbl
      .decimal('price_small')
      .notNullable()

    tbl
      .decimal('price_medium')
      .notNullable()

    tbl
      .decimal('price_large')
      .notNullable()

    tbl
      .integer('instock_small')
      .notNullable()

    tbl
      .integer('instock_medium')
      .notNullable()

    tbl
      .integer('instock_large')
      .notNullable()

    tbl
      .string('material')
      .notNullable()

    tbl
      .integer('total_likes')
      .defaultTo(0)

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tshirt')
};