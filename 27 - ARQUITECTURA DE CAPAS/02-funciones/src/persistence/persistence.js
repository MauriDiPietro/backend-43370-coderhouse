import * as File from './filesystem/filesystem.js'
import * as Memory from './memory/memory.js'
import * as MongoDB from './mongodb/mongodb.js'
import { initMongoDB } from './mongodb/mongodb.js';

let persistence;
let argv = process.argv[2];

switch (argv) {
  case 'file':
    persistence = File; 
    console.log(argv);
    break;
  case 'mongo':
    initMongoDB();
    persistence = MongoDB;
    console.log(argv);
    break; 
  default:
    persistence = Memory;
    break;
}

export async function save(obj) {
  return await persistence.save(obj)
}

export async function getAll() {
  return await persistence.getAll()
}


