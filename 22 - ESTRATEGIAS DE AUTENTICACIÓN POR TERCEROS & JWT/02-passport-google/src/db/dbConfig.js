import { connect } from 'mongoose';

export const connectionString = 'mongodb://localhost:27017/coderhouse';

try {
    await connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB!');
} catch (error) {
    console.log(error);
};
