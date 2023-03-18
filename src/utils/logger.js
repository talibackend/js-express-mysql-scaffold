const logger = require('../config/logger');

module.exports = {
    log : (level, message) =>{
        logger.log(level, { timestamp : new Date(), message })
    }
}