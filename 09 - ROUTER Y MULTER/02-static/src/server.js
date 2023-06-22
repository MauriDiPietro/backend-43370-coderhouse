import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);

const app = express();

app.use(express.static(__dirname + '/public')); 

app.listen(8080, ()=>{
    console.log('server ok, puerto 8080');
});