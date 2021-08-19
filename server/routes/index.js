'use strict';

const gameRoute = require('./game');

function init(server) {
    server.get('*', function (request, response, next) {
        console.log('Request was made to: ' + request.originalUrl);
        return next();
    });

    server.use('/api/game', gameRoute);
}

module.exports = {
    init: init
};