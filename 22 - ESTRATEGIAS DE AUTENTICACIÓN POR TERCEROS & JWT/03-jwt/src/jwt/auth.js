//npm i jsonwebtoken

import jwt from 'jsonwebtoken';

export const PRIVATE_KEY = '1234';

export const generateToken = ( user ) => {
    const payload = {
        userId: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        age: user.age
    };

    const token = jwt.sign(payload, PRIVATE_KEY, {
        expiresIn: '20m'
    });

    return token;
};

