const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api', proxy({target: 'http://localhost:4010'}));
    app.use('/api/edit_deck_name/deck_name', proxy({target: 'http://localhost:4010'}))
    // app.use('/session', proxy({target: 'http://localhost:4444'}));
};