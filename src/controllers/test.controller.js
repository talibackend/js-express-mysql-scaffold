const { helloValidation } = require('../utils/validations/test.validations.js');

module.exports = {
    hello : async (req, res)=>{
        const { body } = req;

        try{
            let payload = helloValidation(body);
        }catch(error){
            console.error(error);
            return res.status(error.status).json({...error});
        }
    }
}