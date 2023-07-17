import mongoose from 'mongoose';

// const connectionString = 'mongodb://localhost:27017/coderhouse';
const connectionString = 'mongodb+srv://admin:admin@cluster0.xibok.mongodb.net/coderhouse?retryWrites=true&w=majority';

// export const initMongoDB = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log('Conectado a MongoDB!');
    } catch (error) {
        console.log(error);
    }
// }