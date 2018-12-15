const router = require('express').Router()
const homeRoute = require('./homeRoute')


//routes
router.use('/home', homeRoute)


module.exports = router;