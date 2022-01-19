// STRETCH

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
        { vin: '2HASWIJV48HJASFGJ', make: 'Jeep', model: 'Liberty', mileage: 8500, title: 'John', transmission: 'automatic' },
        { vin: '45TJASG94JMGAWERT', make: 'Nisssan', model: 'Rogue', mileage: 3805, title: 'Dennis' },
        {vin:  'AW4ET8GAN3WG8HH8Q', make: 'Jeep', model: 'Compass', mileage: 28513, title: 'Phil', transmission: 'manual'}
    ])
}