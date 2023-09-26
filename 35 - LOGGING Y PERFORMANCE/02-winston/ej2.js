import winston from "winston";

export const ej2 = () => {
    const logConfig = {
        level: 'silly',
        transports: [ 
            new winston.transports.Console({ level: 'http' }),
            new winston.transports.File({
                filename:'./logs/ej2.log',
                level: 'error'
            }),
            new winston.transports.File({
                filename:'./logs/ej2B.log'
            }),
        ]
    }

    const logger = winston.createLogger(logConfig);

    logger.silly('imprimo silly');
    logger.debug('imprimo debug');
    logger.verbose('imprimo verbose');
    logger.http('imprimo http');
    logger.info('imprimo info');
    logger.warn('imprimo warn');
    logger.error('imprimo error');

}