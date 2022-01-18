exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments() // primary key called 'id' using auto incrm. integers
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
