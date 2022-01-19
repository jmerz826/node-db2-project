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

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.car)
})

router.post('/', (req, res, next) => {
    Cars.create()
})

module.exports = router