const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api', proxy({target: 'http://localhost:4010'}));
    app.use('/auth', proxy({target: 'http://localhost:4010'}))
};