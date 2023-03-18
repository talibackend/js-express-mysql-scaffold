const User = require('../models/user.model');
const StatusCodes = require('status-codes');
const authUtils = require('../utils/auth');
const messages = require('../utils/messages')

module.exports = {
    helloService : async (payload)=>{
        const { email } = payload;
        let searchUser = await User.findOne({ where : { email } });

        if(searchUser){
            throw { ok : false, message : messages.DUPLICATE_USER, status : StatusCodes.BAD_REQUEST.status };
        }
        payload.password = authUtils.hash(payload.password);
        await searchUser.create(payload);

        return { ok : true, message : messages.ACCOUNT_CREATED, status : StatusCodes.CREATED.status, body : { email } }
    }
}