import express from "express";
import mainRouter from "./routes/index.js";
import Config from "./config/index.js";
import { connectDb } from "./db/db.js";

const app = express();

const PORT = Config.PORT || 8080;

app.use(express.json());

app.use("/api", mainRouter);

connectDb().then(() => {
  console.log("DB CONECTADA");
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});
