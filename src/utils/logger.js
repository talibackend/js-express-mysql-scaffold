const logger = require('../config/logger');

export const log = (level, message) =>{
    logger.log(level, { timestamp : new Date(), message })
}