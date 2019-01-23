var app = require ('./app');
const request = require('supertest');

describe('GET /', function () {
    it('controllo che vada homepage', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    });
  });

/*
test('-GET /', async() =>{
    const res=await request(app).get('/')
    expect(res.statusCode).toBe(200);
});  */