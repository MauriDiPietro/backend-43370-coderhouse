import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/coderhouse';

try {
    await mongoose.connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB!');
} catch (error) {
    console.log(error);
}