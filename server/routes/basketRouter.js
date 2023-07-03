const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', basketController.addToCart)
router.delete('/:id', basketController.remove)
router.get('/', basketController.getAll)

module.exports = router
