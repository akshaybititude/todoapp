const express = require('express');
const router = express.Router();
const controller = require('./todo.controller');


router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

module.exports = router;