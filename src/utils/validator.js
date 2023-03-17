const StatusCodes = require('status-codes');

module.exports = (schema, body)=>{
    const { error, value } = schema.validate(body);

    if(error){
        throw { ok : false, message : error.details[0].message, status : StatusCodes.BAD_REQUEST.status }
    }

    return value;
}