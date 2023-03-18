const Joi = require('joi');
const validator = require('../validator');

module.exports = {
    helloValidation : (body)=>{
        const schema = Joi.object({
            name : Joi.string().required(),
            email : Joi.string().email().required(),
            password : Joi.string().min(8)
        });

        return validator(schema, body);
    }
}