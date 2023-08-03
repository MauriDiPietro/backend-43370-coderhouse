import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { __dirname, mongoStoreOptions } from './utils.js'
import usersRouter from './routes/users.router.js'
import './db/dbConfig.js'
import { errorHandler } from './middlewares/errorHandler.js'
import passport from 'passport';
import './passport/local-strategy.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session(mongoStoreOptions))
 
/* ------------------------------------ - ----------------------------------- */
//! --> ANTES DE LAS RUTAS <--
app.use(passport.initialize());
app.use(passport.session());
/* ------------------------------------ - ----------------------------------- */

app.use('/users', usersRouter);
  
app.use(errorHandler)
  
const PORT = 8088
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
