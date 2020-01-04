const router = require('express').Router();

const apiRoutes = require('./api-routes')
router.use('/api', apiRoutes)

const htmlRoutes = require('./html-routes')
router.use('/', htmlRoutes)

module.exports = router;