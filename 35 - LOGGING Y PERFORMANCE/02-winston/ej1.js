import winston from "winston";

export const ej1 = () => {
    const logConfig = {
        transports: [ new winston.transports.Console() ]
    }

    const logger = winston.createLogger(logConfig);

    logger.level = 'silly';

    logger.silly('imprimo silly');
    logger.debug('imprimo debug');
    logger.verbose('imprimo verbose');
    logger.info('imprimo info');
    logger.http('imprimo http');
    logger.warn('imprimo warn');
    logger.error('imprimo error');
}