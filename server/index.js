'use strict';

const
    express = require('express'),
    bodyParser = require('body-parser');

    const cors = require('cors');

module.exports = function() {
    let server = express(),
        create,
        start;

    server.use(cors({
        origin: '*'
    }));

    create = function(config) {
        let routes = require('./routes');

        // Server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        server.set('viewDir', config.viewDir);

        // Returns middleware that parses json
        server.use(bodyParser.json());

        // Set up routes
        routes.init(server);
    };

    start = function() {
        let hostname = server.get('hostname'),
            port = server.get('port');
        process.env.DB_CONNECTION_STRING = "mongodb+srv://bryanimon:bryan1A!@cluster0.sodrk.mongodb.net/cryptogame?retryWrites=true&w=majority";
        server.listen(process.env.PORT || port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};
