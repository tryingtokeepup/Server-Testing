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

server.delete('/resource/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await resource.remove(id);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);

    res.status(500).json({ err: 'lol get gud at servers nub' });
  }
});
module.exports = server;
