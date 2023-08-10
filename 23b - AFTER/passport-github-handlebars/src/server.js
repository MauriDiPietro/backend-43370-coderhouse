import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { __dirname, mongoStoreOptions } from './utils.js'
import usersRouter from './routes/users.router.js';
import viewsRouter from './routes/views.router.js';
import './db/dbConfig.js'
import { errorHandler } from './middlewares/errorHandler.js'
import passport from 'passport';
import './passport/local-strategy.js';
import './passport/github-strategy.js';
import handlebars from 'express-handlebars';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session(mongoStoreOptions))

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');
 
/* ------------------------------------ - ----------------------------------- */
app.use(passport.initialize());
app.use(passport.session());
/* ------------------------------------ - ----------------------------------- */

app.use('/users', usersRouter);
app.use('/', viewsRouter);
  
app.use(errorHandler);
  
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
