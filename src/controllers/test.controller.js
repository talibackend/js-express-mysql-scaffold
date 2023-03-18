const { helloValidation } = require('../utils/validations/test.validations.js');
const { helloService } = require('../services/test.service');
const { log } = require('../utils/logger');

module.exports = {
    hello : async (req, res)=>{
        const { body } = req;

        try{
            let payload = helloValidation(body);
            let service = await helloService(payload);
            return res.status(service.status).json({...service});
        }catch(error){
            log('error', { error });
            return res.status(error.status).json({...error});
        }
    }
}