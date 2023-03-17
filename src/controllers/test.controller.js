const { helloValidation } = require('@src/utils/validations/test.validations.js');

module.exports = {
    hello : (req, res)=>{
        const { body } = req;

        try{
            let payload = helloValidation(body);
        }catch(error){
            
        }
    }
}