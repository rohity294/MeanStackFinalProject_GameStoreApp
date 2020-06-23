// JavaScript source code
const mongoose = require('mongoose');
const Game = mongoose.model('game');
const getGames = function(req, res){
    Game.find().exec(function (err, gamedata) {
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(200)
            .json(gamedata);
    });
};

const getSingleGame = (req, res) => {
    Game
        .findById(req.params.gameid)
        .exec((err, game) => {
            if (!game) {
                return res
                    .status(404)
                    .json({
                        "message": "game not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(game);
        });
};
const createGame = function (req, res) {
    Game.create({
        name: req.body.name,
        type: req.body.type,
        players: req.body.players,
        origin: req.body.origin,
        stared: req.body.stared        
    }, (err, gamedata) => {
        if (err) {
            res.status(400)
                .json(err);
        } else {
            res.status(201)
                .json(gamedata);
        }
    });    
};
const updateGame = function (req, res) {
    if (!req.params.gameid) {
        res.status(404)
            .json({
                "message": "Not found, gameid is required"
            });
        return;
    }
    Game.findById(req.params.gameid)
        .exec((err, gamedata) => {
            if (!gamedata) {
                res.json(404)
                    .status({
                        "message": "game id not found"
                    });
                return;
            }
            else if (err) {
                res.status(400)
                    .json(err);
                return;
            } else if (err) {
                res.status(400)
                    .json(err);
                return;
            }
            gamedata.name = req.body.name;
            gamedata.type = req.body.type;
            gamedata.players = req.body.players;
            gamedata.origin = req.body.origin;
            gamedata.stared = req.body.stared;
        
        
            gamedata.save((err, gamedata) => {
                if (err) {
                    res.status(404)
                        .json(err);
                } else {
                    res.status(200)
                        .json(gamedata);
                }
            });
        });
}; 
const deleteGame = function (req, res) {
    const gameid = req.params.gameid;
    if (gameid) {
        Game.findByIdAndRemove(gameid)
            .exec((err, gamedata) => {
                if (err) {
                    res.status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(null);
            });
    }
    else {
        res
            .status(404)
            .json({ "message": "No game id" });
    }   
};

module.exports = {
    getGames, getSingleGame, createGame, updateGame, deleteGame
};