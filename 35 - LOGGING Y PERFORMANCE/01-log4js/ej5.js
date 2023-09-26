import log4js from "log4js";

export const ej5 = () => {

    log4js.configure({
        appenders: {
            file: { type: 'file', filename: './logs/ej5.log' },
            console: { type: 'console' }
        },
        categories: {
            default: { appenders: ['file', 'console'], level: 'trace' },
            dev: { appenders: ['console'], level: 'info' },
            prod: { appenders: ['file'], level: 'warn'}
        }
    });

    const ENV = 'prod';
    
    let logger = log4js.getLogger();

    if(ENV === 'prod') logger = log4js.getLogger('prod')
    else logger = log4js.getLogger('dev')
    
    logger.trace('Imprimo Trace');
    logger.debug('Imprimo debug');
    logger.info('Imprimo info');
    logger.warn('Imprimo warn');
    logger.error('Imprimo error');
    logger.fatal('Imprimo fatal');
}
    

