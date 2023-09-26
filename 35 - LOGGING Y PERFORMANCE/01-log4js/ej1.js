import log4js from "log4js";

const logger = log4js.getLogger();

logger.level = 'warn';

export const ej1 = () => {
    logger.trace('Imprimo Trace');
    logger.debug('Imprimo debug');
    logger.info('Imprimo info');
    logger.warn('Imprimo warn');
    logger.error('Imprimo error');
    logger.fatal('Imprimo fatal');
}