import config from '../config/config.js';

export const getEnvironment = () => {
    const ENV = config.ENV.toUpperCase();
    return ENV;
};