const { log } = require('../utils/logger');

module.exports = {
    logRequest : (req, res, next)=>{
        const { ip, url } = req;
        log('info', { url, ip });
        next();
    }
}