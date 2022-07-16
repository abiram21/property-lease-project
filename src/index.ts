import express from "express";
import http from 'http';

var app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);
require('./app')(app);

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 