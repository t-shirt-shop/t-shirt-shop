exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, date: 'around 1pm july 5 2019', description: 'Awesome shirt!', image: '', 'tshirt_id': 1, 'posted_by': 'test user' },
        {id: 2, date: 'around 5pm july 7 2019', description: 'sick shirt bro!', image: '', 'tshirt_id': 1, 'posted_by': 'test user'},
        {id: 3, date: 'around 2pm july 10 2019', description: 'digging that shirt!', image: '', 'tshirt_id': 1, 'posted_by': 'test user'},
      ]);
    });
};
