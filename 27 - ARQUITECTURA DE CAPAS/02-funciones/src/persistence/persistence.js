import * as File from './filesystem/filesystem.js'
import * as Memory from './memory/memory.js'
import * as MongoDB from './mongodb/mongodb.js'
import { initMongoDB } from './mongodb/mongodb.js';

let dao;
let persistence = process.argv[2];

switch (persistence) {
  case 'file':
    dao = File; 
    console.log(persistence);
    break;
  case 'mongo':
    initMongoDB();
    dao = MongoDB;
    console.log(persistence);
    break; 
  default:
    dao = Memory;
    break;
}

export async function save(obj) {
  return await dao.save(obj)
}

export async function getAll() {
  return await dao.getAll()
}


