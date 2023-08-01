import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import userRouter from './routes/user.router.js';
import './db/dbConnection.js';
import { connectionString } from './db/dbConnection.js';

const mongoStoreOptions = {
    store: MongoStore.create({
        mongoUrl: connectionString,
        // crypto: {
        //     secret: '1234'
        // }
    }),
    secret: '1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session(mongoStoreOptions));

app.use('/api', userRouter);

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});