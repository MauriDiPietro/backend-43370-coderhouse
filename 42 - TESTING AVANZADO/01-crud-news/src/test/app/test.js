import { describe, test } from "node:test";
import assert from "node:assert";
import { fakerES as faker } from "@faker-js/faker";

const apiURL = "http://localhost:8080/news";

describe("TESTS API NEWS", () => {
  test("[POST] /news", async () => {
    await fetch(apiURL, { method: "DELETE" });

    const doc = {
      title: faker.person.jobTitle(),
      body: faker.hacker.phrase(),
      author: faker.person.fullName(),
      image: faker.image.url(),
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });

    const responseApi = await response.json();
    // console.log(responseApi);
    const id = responseApi._id;
    assert.ok(responseApi, "_id");
    assert.equal(typeof id, "string");
    assert.equal(response.status, 200);
  });

  test("[GET-ALL] /news", async () => {
    await fetch(apiURL, { method: "DELETE" });

    const response = await fetch(apiURL);
    const responseApi = await response.json();
    assert.strictEqual(Array.isArray(responseApi), true);
    assert.equal(responseApi.length === 0, true);
  });

  test("[GET] /news/:id", async () => {
    await fetch(apiURL, { method: "DELETE" });

    const doc = {
      title: faker.person.jobTitle(),
      body: faker.hacker.phrase(),
      author: faker.person.fullName(),
      image: faker.image.url(),
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePost = await response.json();
    assert.ok(responsePost, "_id");
    const id = responsePost._id;
    const responseGet = await fetch(`${apiURL}/${id}`);
    const statusCode = responseGet.status;
    const responseGetById = await responseGet.json();
    assert.equal(statusCode, 200);
    assert.equal(responseGetById.body, responsePost.body);

    const idFaker = "507f191e810c19729de860ea";
    const responseGetById2 = await fetch(`${apiURL}/${idFaker}`);
    const getByIdFail = await responseGetById2.json();
    const responseGetFail = getByIdFail.msg;
    const msgErrorApi = `No se encontró el id ${idFaker} en la base de datos.`;
    assert.equal(responseGetFail, msgErrorApi);
  });

  test("[UPDATE] news/:id", async () => {
    await fetch(apiURL, {
      method: "DELETE",
    });

    const doc = {
      title: faker.person.jobTitle(),
      body: faker.hacker.phrase(),
      author: faker.person.fullName(),
      image: faker.image.url(),
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePost = await response.json();
    assert.ok(responsePost, "_id");
    const id = responsePost._id;

    const doc2 = {
      title: "title test updated",
      body: "body test updated",
      author: "author test updated",
      image: "...",
    };

    const response2 = await fetch(`${apiURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc2),
    });
    const responsePut = await response2.json();
    assert.ok(responsePut, "_id");
    const statusCode = response2.status;
    assert.strictEqual(statusCode, 200);
    assert.strictEqual(responsePut.body, doc2.body);
  });

  test("[DELETE] news/:id", async () => {
    await fetch(apiURL, {
      method: "DELETE",
    });

    const doc = {
      title: faker.person.jobTitle(),
      body: faker.hacker.phrase(),
      author: faker.person.fullName(),
      image: faker.image.url(),
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
    const responsePost = await response.json();
    assert.ok(responsePost, "_id");
    const id = responsePost._id;
    const response2 = await fetch(`${apiURL}/id/${id}`, { method: "DELETE" });
    const responseDel = await response2.json();
    assert.strictEqual(response2.status, 200);
    assert.strictEqual(responseDel.body, responsePost.body);

    const responseGet = await fetch(`${apiURL}/${id}`);
    const statusCode = responseGet.status;
    const responseGetById = await responseGet.json();
    assert.strictEqual(statusCode, 404);
    assert.strictEqual(
      responseGetById.msg,
      `No se encontró el id ${id} en la base de datos.`
    );
  });
});
