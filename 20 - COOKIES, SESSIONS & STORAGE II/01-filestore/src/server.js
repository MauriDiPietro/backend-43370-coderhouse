import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import userRouter from './routes/user.router.js';

const FileStore = sessionFileStore(session);

const fileStoreOptions = {
    store: new FileStore({
        path: './sessions',
        ttl: 60,
        reapInterval: 30
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
app.use(session(fileStoreOptions));

app.use('/api', userRouter);

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});