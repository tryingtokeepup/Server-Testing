const request = require('supertest');

const db = require('../data/dbConfig');
const resourceModel = require('./resourceModel.js');

// before and after Each or before and after All
afterEach(async () => {
  await db('resource').truncate();
});

describe('the helper functions that we need for DB', () => {
  it('should insert provided resource', async () => {
    const obj = await resourceModel.insert({ name: 'chocolate' });

    const resource = await db('resource');
    expect(resource).toHaveLength(1);
    expect(obj.name).toEqual('chocolate');
  });

  it('should insert provided resource', async () => {
    const obj = await resourceModel.insert({ name: 'bilbo' });
    let resource = await db('resource');
    expect(resource).toHaveLength(1);
    expect(obj.name).toEqual('bilbo');

    await resourceModel.insert({ name: 'sam' });
    resource = await db('resource');
    expect(resource).toHaveLength(2);
  });
  //it('should delete the provided resource or thing')
});
