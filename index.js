require('dotenv').config();

const server = require('./server');

const port = procdss.env.PORT || 5000;

server.listen(port, () => {
    console.log('server listening on ', port);
});