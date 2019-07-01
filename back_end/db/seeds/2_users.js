const faker = require('faker');

const createUser = () => ({
	user_name: faker.name.firstName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
});

exports.seed = async function(knex, Promise) {
	const fakeUsers = []

	for (let i = 0; i < 6; i++){
		fakeUsers.push(createUser())
	}

	await knex('users').insert(fakeUsers)
}
