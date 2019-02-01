const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(obj) {
  const [id] = await db('resource').insert(obj);

  return db('resource')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('resource');
}

function findById(id) {
  return null;
}
