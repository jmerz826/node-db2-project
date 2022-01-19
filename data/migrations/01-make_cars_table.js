exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments() // primary key called 'id' using auto incrm. integers
    table.text('vin', 128).unique().notNullable()
    table.text('make', 128).notNullable()
    table.text('model', 128).notNullable()
    table.float('mileage').notNullable()
    table.text('title', 128)
    table.text('transmission', 128)
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
