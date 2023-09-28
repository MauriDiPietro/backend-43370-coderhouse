import express from "express";
import cluster from 'cluster';
import { cpus } from 'os';

const numCPUS = cpus().length;

const app = express();

const PORT = 8080;

if(cluster.isPrimary) {
  /* ------------------------------ proceso padre ----------------------------- */
  console.log(`nucleos--> , ${numCPUS}`);
  console.log(`PID MASTER __> ${process.pid}`);

  for (let i = 0; i < numCPUS; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code) => {
    console.log(`worker ${worker.process.pid} exited with code ${code}`);
    cluster.fork();
  })
} else {
  /* ------------------------------ proceso hijo ------------------------------ */
  app.get("/operacion-simple", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    res.json({ sum, pid: process.pid });
  });
  
  app.get("/operacion-compleja", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 50000; i++) {
      sum += i;
    }
    res.json({  sum, pid: process.pid });
  });

  app.get('/dead', (req, res)=>{
    res.send({msg: 'ok'});
    console.log(`pid: ${process.pid} dead`);
    process.exit(0);
  })
  
  app.listen(PORT, () =>
    console.log(`Servidor express escuchando en el puerto ${PORT} pid: ${process.pid}`)
  );
}

