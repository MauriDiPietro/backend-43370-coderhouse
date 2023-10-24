//npm i jest supertest

import app from '../../server.js';
import request from 'supertest';
import mongoose from 'mongoose';
import { fakerES as faker } from '@faker-js/faker';

describe('Tests integrales Api News', ()=>{
    beforeAll(async()=>{
        await mongoose.connection.collections['news'].drop();
    });

    test('[POST] /news', async()=>{
        const doc = {
            title: faker.person.jobTitle(),
            body: faker.hacker.phrase(),
            author: faker.person.fullName(),
            image: faker.image.url()
        };
        const response = await request(app).post('/news').send(doc);
        // console.log(response);
        const id = response.body._id;
        const titleResponse = response.body.title;
        expect(response.statusCode).toBe(200);
        expect(id).toBeDefined();
        expect(response.body).toHaveProperty('_id');
        expect(titleResponse).toBe(doc.title)
    });

    test('[GET-ALL] /news', async()=>{
        const response = await request(app).get('/news');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(1);
    });

    test('[GET-ID] /news/:id', async()=>{
        const doc = {
            title: faker.person.jobTitle(),
            body: faker.hacker.phrase(),
            author: faker.person.fullName(),
            image: faker.image.url()
        };
        const response = await request(app).post('/news').send(doc);
        const titleResponse = response.body.title;
        expect(response.statusCode).toBe(200);
        const id = response.body._id;
        expect(id).toBeDefined();
        expect(response.body).toHaveProperty('_id');
        const responseGetById = await request(app).get(`/news/${id}`);
        expect(responseGetById.statusCode).toBe(200);
        expect(titleResponse).toBe(responseGetById.body.title);

        const idFail = '65371455a4f446f3d0566660';
        const GetByIdFail = await request(app).get(`/news/${idFail}`);
        const responseGetFail = GetByIdFail.body.msg;
        const msgErrorApi = `No se encontró el id ${idFail} en la base de datos.`
        expect(GetByIdFail.statusCode).toBe(404);
        expect(responseGetFail).toEqual(msgErrorApi);

    })

    test('[PUT] /news/:id', async()=>{
        const doc = {
            title: faker.person.jobTitle(),
            body: faker.hacker.phrase(),
            author: faker.person.fullName(),
            image: faker.image.url()
        };
        const response = await request(app).post('/news').send(doc);
        const idPost = response.body._id;
        expect(idPost).toBeDefined();

        const docUpd = {
            title: 'title updated',
            body: faker.hacker.phrase(),
            author: faker.person.fullName(),
            image: faker.image.url()
        };
        const responsePut = await request(app).put(`/news/${idPost}`).send(docUpd);
        const idPut = responsePut.body._id;
        expect(idPut).toBeDefined();
        expect(responsePut.statusCode).toBe(200);
    })

    test('[DELETE] /news/id/:id', async()=>{
        const doc = {
            title: faker.person.jobTitle(),
            body: faker.hacker.phrase(),
            author: faker.person.fullName(),
            image: faker.image.url()
        };
        const response = await request(app).post('/news').send(doc);
        const idPost = response.body._id;
        expect(idPost).toBeDefined();

        const responseDel = await request(app).delete(`/news/id/${idPost}`);
        expect(responseDel.statusCode).toBe(200);
        const responseGetById = await request(app).get(`/news/${response.body._id}`);
        const responseGetFail = responseGetById.body.msg;
        const msgErrorApi = `No se encontró el id ${response.body._id} en la base de datos.`
        expect(responseGetById.statusCode).toBe(404);
        expect(responseGetFail).toEqual(msgErrorApi);
    })
})