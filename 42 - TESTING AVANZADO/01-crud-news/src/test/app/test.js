import { describe, test } from 'node:test';
import assert from 'node:assert';
import { fakerES as faker } from '@faker-js/faker';

const apiURL = 'http://localhost:8080/news';

describe('TESTS API NEWS', ()=>{
    test('[POST] /news', async()=>{
        await fetch(apiURL, { method: 'DELETE' });

        const doc = {
            title: faker.person.jobTitle(),
            body: faker.hacker.phrase(),
            author: faker.person.fullName(),
            image: faker.image.url()
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(doc)
        });

        const responseApi = await response.json();
        // console.log(responseApi);
        const id = responseApi._id;
        assert.ok(responseApi,'_id');
        assert.equal(typeof id, 'string');
        assert.equal(response.status, 200);
    });

    test('[GET-ALL] /news', async()=>{
        await fetch(apiURL, { method: 'DELETE' });

        const response = await fetch(apiURL);
        const responseApi = await response.json();
        assert.strictEqual(Array.isArray(responseApi), true);
        assert.equal(responseApi.length === 0, true);
    })

})