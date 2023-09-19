import express from 'express';
import { HttpResponse } from './utils/http.response.js';
import { errorMiddleware } from './utils/error.middleware.js';
const httpResponse = new HttpResponse();

const app = express();

app.use(express.json());

app.get('/', (req, res, next)=>{
    try {
        data = [{name: 'carlos'}]
        if(data.length === 0) return httpResponse.NotFound(res, 'No data found');
        // throw new Error('Error loading')
        return httpResponse.Ok(res, data)
    } catch (error) {
        next(error)
    }
})

app.use(errorMiddleware);

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});