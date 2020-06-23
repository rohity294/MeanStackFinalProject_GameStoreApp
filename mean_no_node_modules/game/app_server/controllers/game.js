
const request = require('request');

const apiOptions = {
    server: "http://localhost:3000"
}

const _renderHomepage = function (req, res, responseBody) {
    res.render('gamelist', {
        games: responseBody
    });
};
const homelist = function (req, res) {
    const path = '/api/games';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body);
        });
};
const _renderDetailPage = function (req, res, responseBody) {
    res.render('game-info', {
        currentGame: responseBody
    });
};
const gameInfo = function (req, res) {
    const path = 'api/games/${req.params.gameid}';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );

};

const _renderCreatePage = function (req, res) {
    res.render('create-new-game', {
        title: 'Create New Game'
    });
};

const addNewGame = function (req, res) {
    _renderCreatePage(req, res);

};
const doAddNewGame = function (req, res) {
    const path = '/api/games';
    const postdata = {
        name: req.body.name,
        origin: req.body.origin,
        examples: req.body.examples,
        taste: req.body.taste,
        rating: req.body.rating

    };

    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect('/');
            }
        });
};

module.exports = {
    gameInfo,
    homelist,
    doAddNewGame,
    addNewGame
};
