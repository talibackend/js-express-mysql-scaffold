const bcrypt = require('bcryptjs');

module.exports = {
    hash : (string)=>{
        return bcrypt.hashSync(string, 10);
    },
    check : (string, hash)=>{
        return bcrypt.compareSync(string, hash);
    }
}