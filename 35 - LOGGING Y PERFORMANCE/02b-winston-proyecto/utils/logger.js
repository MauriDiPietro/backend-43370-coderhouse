import winston from "winston";

const logConfig = {
    transports: [
        new winston.transports.File({
            filename: './logs.log',
            level: 'info'
        }),

        new winston.transports.Console({ level: 'silly' })
    ]
};

export const logger = winston.createLogger(logConfig);