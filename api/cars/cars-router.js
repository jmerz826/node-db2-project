const router = require('express').Router()

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

router.get('/', (req, res, next) => {

})

router.get('/:id', (req, res, next) => {
    
})

router.post('/', (req, res, next) => {
    
})

module.exports = router