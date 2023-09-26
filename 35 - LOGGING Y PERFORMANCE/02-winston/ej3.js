import winston from "winston";
import 'winston-mongodb';

export const ej3 = () =>{
    const logConfig = {
        transports: [
            winston.add(new winston.transports.MongoDB({
                options: { useUnifiedTopology: true },
                db: 'mongodb://localhost:27018/coderhouse',
                collection: 'logs',
                tryReconnect: true,
                level: 'error'
            }))
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