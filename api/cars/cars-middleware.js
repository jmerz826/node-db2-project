const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  const {id} = req.params
  try {
    const car = await Cars.getById(id)  
    if (!car) {
      res.status(404).json({message: `car with id ${id} is not found`})      
    } else {
      req.car = car 
      next()
    }
  } catch (err) {
    next(err)
  }
}
    
const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage, title, transmission } = req.body
  const submission = req.body
  try {
    if (!vin || vin === undefined) res.status(400).json({ message: `vin is missing` })
    if(!make || make === undefined) res.status(400).json({message: `make is missing`})
    if(!model || model === undefined) res.status(400).json({message: `model is missing`})
    if (!mileage || mileage === undefined) res.status(400).json({ message: `mileage is missing` })

    next()
  } catch (err) {
    next(err)
  }
}

const checkVinNumberValid = (req, res, next) => {

}

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body
  try {
    const allCars = await Cars.getAll()
    allCars.forEach(car => {
      if (car.vin === vin) {
        res.status(400).json({message: `vin ${vin} already exists`})
      }
    })
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique}