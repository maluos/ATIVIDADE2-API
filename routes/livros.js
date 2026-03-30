const express = require('express')
const router = express.Router()
const controller = require('../controllers/livrosController')

router.get('/', controller.getLivros)
router.post('/', controller.createLivro)
router.put('/:id', controller.updateLivro)
router.delete('/:id', controller.deleteLivro)

module.exports = router