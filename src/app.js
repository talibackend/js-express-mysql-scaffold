const express = require('express');
const app = express();
const database = require('@src/config/database');
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

app.use(cors());
app.use(express.json({ limit : '100mb' }))
app.use(express.urlencoded({ limit : '100mb' }));

