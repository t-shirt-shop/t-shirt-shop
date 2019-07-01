exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shirt_cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('shirt_cart').insert([
        {tshirt_id: 1, cart_id: 1, small_amount: 1, medium_amount: 0, large_amount: 0},
        {tshirt_id: 2, cart_id: 1, small_amount: 2, medium_amount: 1, large_amount: 0},
        {tshirt_id: 3, cart_id: 1, small_amount: 0, medium_amount: 2, large_amount: 1},
        {tshirt_id: 4, cart_id: 1, small_amount: 1, medium_amount: 0, large_amount: 0},
        {tshirt_id: 5, cart_id: 1, small_amount: 0, medium_amount: 0, large_amount: 1},
      ]);
    });
};