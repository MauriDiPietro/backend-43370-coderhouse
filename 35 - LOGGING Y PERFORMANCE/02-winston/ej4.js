import { createLogger, format, transports } from 'winston';
const { combine, printf, prettyPrint, timestamp, colorize } = format;

export const ej4 = () => {
    const logConfig = {
        level: 'silly',
        format: combine(
            timestamp({
                format: 'MM-DD-YYYY HH:mm:ss',
            }),
            colorize(),
            // prettyPrint(),
            printf((info) => `${info.level} | ${info.timestamp} | ${info.message}`)
        ),
        transports: [new transports.Console()]
    };

    const logger = createLogger(logConfig);

    logger.silly("imprimo silly");
    logger.debug("imprimo debug");
    logger.verbose("imprimo verbose");
    logger.http("imprimo http");
    logger.info("imprimo info");
    logger.warn("imprimo warn");
    logger.error("imprimo error");
}
