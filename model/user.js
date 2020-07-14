const Model = require('./model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User extends Model
{
    constructor(username, password)
    {
        super('users');
        this.username = username;
        this.password = this.passwordHash(password);
    }

    auth(passwordToCompare)
    {
        return bcrypt.compareSync(passwordToCompare, this.password);
    }

    passwordHash(passwordToHash)
    {
        return bcrypt.hashSync(passwordToHash, saltRounds);
    }
}

module.exports = User;