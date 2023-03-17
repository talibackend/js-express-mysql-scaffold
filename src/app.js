const express = require('express');
const app = express();
const database = require('./config/database');
const http = require('http');
const server = http.createServer(app);
