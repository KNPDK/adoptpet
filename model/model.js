const mongo = require('mongodb');
class Model
{
    constructor(collectionName)
    {
        this.collectionName = collectionName;
    }

    async getData()
    {
        // Create your own connection url as env variable
        var dbUrl = process.env.PET_DB || 'mongodb://root:root@localhost/adoptpet?authMechanism=SCRAM-SHA-256&authSource=admin';

        const mongoDBConnect = await mongo.MongoClient.connect(
        dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });

        return mongoDBConnect.db('adoptpet').collection(this.collectionName);
    }


    async save()
    {
        const data = await this.getData();
        await data.insertOne(this);
    }

    async findAll()
    {
        const data = await this.getData();
        const allData = await data.find({}).toArray();
        return allData;
    }

    // Search object is simply json for eg. {sex: male,type: dog}
    async findMany(searchObject)
    {
        const data = await this.getData();
        const res = await data.find(searchObject).toArray();
        return res;
    }

    // Remember that id in mongo is stored as '_id' -> {_id: id}!
    async findOne(searchObject)
    {
        const data = this.getData();
        const res = await data.findOne(searchObject);
        return res;
    }

    async deleteOne(searchObject)
    {
        const data = await this.getData();
        await data.deleteOne(searchObject);
    }

    async deleteMany(searchObject)
    {
        const data = await this.getData();
        await data.deleteMany(searchObject);
    }
}

module.exports = Model;