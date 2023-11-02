import express from "express";
import { dbConnection } from "./config/db.connection";
import config from "./config/config";
import { errorHandler } from "./middlewares/error.handler";
import apiRouter from "./routes/index";

const app = express();

app.use(express.json());

dbConnection()
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.log(error));

const PORT = config.PORT;

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server ok on PORT: ${PORT}`));
