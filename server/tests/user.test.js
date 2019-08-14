const { app } = require('../server');
const { userSeedData } = require('./seed/seedData');
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

describe('GET /users', () => {
    it('should return an array of users', async done => {
        const response = await request.get('/api/user/users').set('Authorization', token);

        await expect(response.status).toEqual(200);
        await expect(response.body.length).toBeGreaterThan(0);
        done();
    });

    it('should return 401 if not authorized', async done => {
        const response = await request
            .get('/api/user/users')
            .set('Authorization', 'bearer testing');

        await expect(response.status).toEqual(401);
        done();
    });

    it('should return the user data from the current user', async done => {
        const response = await request.get('/api/user/current').set('Authorization', token);

        await expect(response.status).toBe(200);
        await expect(response.body).not.toBeNull();
        done();
    });

    it('should return an error if invalid username is entered', async done => {
        const response = await request.get('/api/user/unknown').set('Authorization', token);

        await expect(response.status).toBe(404);
        await expect(response.body.error).not.toBeNull();
        done();
    });
});
