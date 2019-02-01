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

server.post('/resource', (req, res) => {
  const { name } = req.body;

  res.status(201).json({ name: `${name}` });
});

server.delete('/resource/:id', (req, res) => {
  id = req.params.id;
  const index = resource.findIndex(resource => resource.id === id);

  const deletedResource = resource[index];

  resource.splice(index, 1);
  res.status(200).json(deletedResource);
});
module.exports = server;
