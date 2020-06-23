var express = require('express');
var router = express.Router();
var ctrlAbout = require('../controllers/about');
var ctrlInfo = require('../controllers/list');
var ctrlGame = require('../controllers/game');

router.get('/', ctrlGame.homelist);

router.route('/new').get(ctrlGame.addNewGame).post(ctrlGame.doAddNewGame);
router.get('/about', ctrlAbout.aboutSite);
router.get('/list', ctrlInfo.infoSite);
router.get('/display', ctrlAbout.displaySite);
router.get('/games/:gameid', ctrlGame.gameInfo);

module.exports = router;
