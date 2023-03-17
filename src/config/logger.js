const winston = require('winston');
const path = require('path');

export default logger = winston.createLogger({
    transports : []
});

logger.add(new winston.transports.File({ filename : path.resolve(__dirname, '../../logs/info.log'), level : 'info' }));
logger.add(new winston.transports.File({ filename : path.resolve(__dirname, '../../logs/error.log'), level : 'error' }));

if(process.env.NODE_ENV != 'production'){
    logger.add(new winston.transports.Console());
}