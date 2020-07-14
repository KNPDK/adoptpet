const Model = require('./model');

class Pet extends Model
{
    constructor(type, sex, age, size, activity)
    {
        super('pets');
        this.type = type;
        this.sex = sex;
        this.age = age;
        this.size = size;
        this.activity = activity;
    }
}

module.exports = Pet;