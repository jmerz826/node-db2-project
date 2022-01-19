const router = require('express').Router()
const Cars = require('./cars-model')

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(() => next())
})

router.get('/:id', (req, res, next) => {
    
})

router.post('/', (req, res, next) => {
    
})

module.exports = router