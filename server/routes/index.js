const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')
const ratingRouter = require('./ratingRouter')
const authMiddleware = require('../middleware/authMiddleware')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/basket', authMiddleware, basketRouter)
router.use('/rating', ratingRouter)

module.exports = router
