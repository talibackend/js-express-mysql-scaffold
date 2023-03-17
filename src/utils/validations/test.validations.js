const Joi = require('joi');
const validator = require('@src/utils/validator');

module.exports = {
    helloValidation : (body)=>{
        const schema = Joi.object({
            name : Joi.string().required(),
            email : Joi.string().email().required()
        });

        return validator(schema, body);
    }
}