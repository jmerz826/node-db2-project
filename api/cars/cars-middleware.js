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

}

const checkVinNumberValid = (req, res, next) => {

}

const checkVinNumberUnique = (req, res, next) => {

}

module.exports = {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique}