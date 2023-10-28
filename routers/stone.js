const express = require('express');
// const stoneModel = require("../models/stoneModel");
const stoneController = require("../controllers/stoneController")
const router = express.Router();

router.get('/', stoneController.findAllStones);
router.get('/:id', stoneController.findStone);
router.post('/create_stone', stoneController.createStone);
router.patch('/:id', stoneController.UpdateStone);
router.delete('/:id', stoneController.DeleteStone);

module.exports = router