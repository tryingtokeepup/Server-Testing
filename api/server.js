const express = require('express');

const resource = require('../resource/resourceModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/resource', async (req, res) => {
  const rows = await resource.getAll();

  res.status(200).json(rows);
});

server.post('/greet', (req, res) => {
  const { firstName, lastName } = req.body;

  res.status(200).json({ hello: `${firstName} ${lastName}` });
});
module.exports = server;
