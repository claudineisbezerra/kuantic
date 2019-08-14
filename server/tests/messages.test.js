const { app } = require('../server');
const { userSeedData, messageSeedData } = require('./seed/seedData');

const supertest = require('supertest');

let token;
let request = supertest(app);

beforeAll(async () => {
    jest.setTimeout(18000);
    const response = await request
        .post('/api/auth/login')
        .send({ email: userSeedData[0].email, password: userSeedData[0].password });

    token = response.body.token;
});

describe('GET /api/messages', () => {
    it('should return an array of messages for a room', async done => {
        let response = await request.get('/api/room').set('Authorization', token);
        let room_id = response.body[response.body.length - 1]._id;
        response = await request.get(`/api/messages/${room_id}`).set('Authorization', token);

        await expect(response.status).toEqual(200);
        await expect(response.body[0].content).toEqual('Test Message 1');
        await expect(response.body[0].room).toEqual(room_id);
        await expect(response.body.length).toBeGreaterThan(0);
        done();
    });
});
