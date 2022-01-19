const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const create = async (newCar) => {
  const {vin, make, model, mileage, title, transmission} = newCar
  const [id] = await db('cars').insert({
    vin, make, model, mileage, title, transmission
  })
  return getById(id)
}

module.exports = {getAll, getById, create}