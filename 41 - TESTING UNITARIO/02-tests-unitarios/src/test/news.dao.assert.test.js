import DaoMongo from "../persistence/DAOS/mongo/news.mongo.dao.js";
import assert from "node:assert";
import test from "node:test";
import mongoose from "mongoose";
import { logger } from "../logs/news.logs.js";

const newsDao = new DaoMongo();
DaoMongo.init();
await mongoose.connection.collections["news"].drop();
logger.info("se limpió la coleccion");

test("Debería retornar todas las noticias de la colección news", async () => {
  const news = await newsDao.getAllNews();
  assert.equal(Array.isArray(news), true);
  assert.equal(news.length === 0, true);
});

test("Debería agregar una noticia", async () => {
  const doc = {
    title: "Noticia1",
    body: "body of noticia1",
    author: "Juan Perez",
    image: "...",
  };
  const response = await newsDao.createNew(doc);
  const news = await newsDao.getAllNews();
  assert.ok(response, "_id");
  assert.equal(response.title, doc.title);
  assert.strictEqual(typeof doc.body === "string", true);
  assert.strictEqual(news.length, 1);
});

test("Debería encontrar una noticia por id", async () => {
  const doc = {
    title: "Noticia2",
    body: "body of noticia2",
    author: "Juan Perez2",
    image: "...",
  };
  const response = await newsDao.createNew(doc);
  const responseIdString = response._id.toString();
  const docNew = await newsDao.getNew(response._id);
  const docNewIdString = docNew._id.toString();
  assert.equal(docNewIdString, responseIdString);
});


