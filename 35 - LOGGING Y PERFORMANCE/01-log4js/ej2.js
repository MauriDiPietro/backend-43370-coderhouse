import log4js from "log4js";

export const ej2 = () => {

    log4js.configure({
        appenders: {
            fileAppender: { type: 'file', filename: './logs/ej2.log' }
        },
        categories: {
            default: { appenders: ['fileAppender'], level: 'trace' }
        }
    })
    
    const logger = log4js.getLogger();
    
    logger.trace('Imprimo Trace');
    logger.debug('Imprimo debug');
    logger.info('Imprimo info');
    logger.warn('Imprimo warn');
    logger.error('Imprimo error');
    logger.fatal('Imprimo fatal');
}
    

