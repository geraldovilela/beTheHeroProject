const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async ()=>{
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
                name: "teste Celebrate ONG",
                email: "contato@refugiodosbichos.com.br",
                whatsapp: "67000000000",
                city:"Dourados",
                uf:"MS"
            })
        console.log(response.body);
    });
});