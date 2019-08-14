const { app } = require('../server');
const supertest = require('supertest');
const { userSeedData } = require('./seed/seedData');
const { populateData } = require('./seed/seedFunctions');
const slugify = require('slugify');

beforeEach(async () => {
    jest.setTimeout(18000);
});

// afterAll(async () => {
//     await populateData();
// });

describe('POST /auth', () => {
    let request = supertest(app);

    it('should signup a user and return a token', async done => {
        const response = await request.post('/api/auth/signup').send({
            handle: slugify('newUser100'),
            email: 'newUser@gmail.com',
            username: 'newUser100',
            password: 'newUserTest'
        });

        await expect(response.status).toEqual(200);
        await expect(response.body.user.session_id).not.toBeNull();
        await expect(response.body.token).not.toBeNull();
        await expect(response.body.auth).not.toBeNull();
        done();
    });

    it('shouldnt signup with invalid details', async done => {
        const response = await request.post('/api/auth/signup').send({
            email: 'test100@hotmail.com',
            username: 'test',
            password: 'testing100'
        });

        await expect(response.status).toEqual(200);
        await expect(typeof response.body).toBe('object');
        await expect(response.body).not.toBeNull();
        done();
    });

    it('should login a user and return a token', async done => {
        const response = await request
            .post('/api/auth/login')
            .send({ email: userSeedData[0].email, password: userSeedData[0].password });

        await expect(response.status).toEqual(200);
        await expect(response.body.token).not.toBeNull();
        await expect(response.body.user.session_id).not.toBeNull();
        await expect(response.body.auth).not.toBeNull();
        done();
    });

    it('should return an object given the wrong login details', async done => {
        const response = await request
            .post('/api/auth/login')
            .send({ email: 'testwrongemail@hotmail.com', password: 'testing123' });

        await expect(response.status).toEqual(200);
        await expect(typeof response.body).toBe('object');
        done();
    });
});
