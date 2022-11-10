const PORT = 4001;
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/blank.html');
})

server.listen(PORT, () => {
    console.log(`Express app listening to PORT ${PORT}`);
})