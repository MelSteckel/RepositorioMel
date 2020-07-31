const http = require('http');
const app = require('./app');
const { normalize } = require('path');
const server = http.createServer(app);

const port = normalize(process.env.PORT || '3000');

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});

//const port = process.env.port || 3000;
//server.listen(port);



