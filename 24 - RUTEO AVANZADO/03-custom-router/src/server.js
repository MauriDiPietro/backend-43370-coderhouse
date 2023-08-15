import express from 'express'
import cookieParser from 'cookie-parser'
import { __dirname } from './utils.js'
import './db/dbConfig.js'
import { errorHandler } from './middlewares/errorHandler.js'
import UserCustomRouter from './routes/users.customRouter.js';
const userCustomRouter = new UserCustomRouter();

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
 
app.use('/users', userCustomRouter.getRouter());


app.use(errorHandler);

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
