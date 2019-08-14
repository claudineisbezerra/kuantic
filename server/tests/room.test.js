const { app } = require('../server');
const { userSeedData } = require('./seed/seedData');

const supertest = require('supertest');

let token;
let request = supertest(app);
let roomId;

beforeAll(async () => {
    jest.setTimeout(18000);
    const response = await request
        .post('/api/auth/login')
        .send({ email: userSeedData[0].email, password: userSeedData[0].password });
    token = response.body.token;
});

describe('POST /api/room', () => {
    it('should create new room #1', async done => {
        const response = await request
            .post('/api/room')
            .send({
                room_name: 'Jest Test Room',
                password: ''
            })
            .set('Authorization', token);
        roomId = response.body._id;

        await expect(response.status).toEqual(200);
        await expect(response.body).not.toBeNull();
        await expect(Object.keys(response.body).length).toBeGreaterThan(0);
        done();
    });

    it('should verify a private room password', async done => {
        const response = await request
            .post('/api/room/verify')
            .send({ room_name: 'Private Room #1', password: 'just4now' })
            .set('Authorization', token);

        await expect(response.status).toEqual(200);
        await expect(response.body).not.toBeNull();
        await expect(response.body.success).toBeTruthy();
        done();
    });
});

describe('GET /api/room', () => {
    it('should return an array of rooms', async done => {
        const response = await request.get('/api/room').set('Authorization', token);

        await expect(response.status).toEqual(200);
        await expect(response.body.length).toBeGreaterThan(0);
        done();
    });

    it('should get the room by room id', async done => {
        const response = await request
            .get(`/api/room/${roomId.toString()}`)
            .set('Authorization', token);

        await expect(response.status).toEqual(200);
        await expect(response.body).not.toBeNull();
        await expect(Object.keys(response.body).length).toBeGreaterThan(0);
        done();
    });
});

describe('PUT /api/room/:room_name', () => {
    it('should update the room name', async done => {
        const response = await request
            .post('/api/room/update/name')
            .send({ room_name: 'Jest Test Room', new_room_name: 'Jest Test Room' })
            .set('Authorization', token);

        await expect(response.status).toEqual(200);
        await expect(response.body).not.toBeNull();
        await expect(response.body.name).toEqual('Jest Test Room');
        await expect(Object.keys(response.body).length).toBeGreaterThan(0);
        done();
    });
});

describe('DELETE /api/room/:room_name', () => {
    it('should delete a room based on the name', async done => {
        const room_name = 'Jest Test Room';
        let response = await request.delete(`/api/room/${room_name}`).set('Authorization', token);

        await expect(response.status).toEqual(200);
        await expect(Object.keys(response.body).length).toBeGreaterThan(0);

        response = await request.get('/api/room').set('Authorization', token);
        await expect(response.body).not.toContain(room_name);
        done();
    });

    it('should return an error with a unknown room name', async done => {
        const room_name = 'Jest Unknown Test Room';
        let response = await request.delete(`/api/room/${room_name}`).set('Authorization', token);

        await expect(response.status).toEqual(404);
        await expect(Object.keys(response.body).length).toBeGreaterThan(0);
        done();
    });
});
