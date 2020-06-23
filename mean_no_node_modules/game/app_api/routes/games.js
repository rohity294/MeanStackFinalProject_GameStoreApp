// JavaScript source code
const express = require('express');


const router = express.Router();
const ctrlGame = require("../controllers/game");

router.route('/games').get(ctrlGame.getGames).post(ctrlGame.createGame);

router.route('/games/:gameid').get(ctrlGame.getSingleGame).put(ctrlGame.updateGame).delete(ctrlGame.deleteGame);

module.exports = router;