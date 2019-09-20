'use strict';

const express = require('express');
const app = require('./app');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);