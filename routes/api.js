const express = require('express');
const mongo = require('mongodb');
const router = express.Router();


router.get('/', async (req, res) => {
    const data = await getData();
    res.send(await data.find({}).toArray());
});


//POST todo


//DELETE todo


async function getData()
{
    const mongoDBConnect = await mongo.MongoClient.connect(
        'mongodb://root:root@77.55.208.30:27017/adoptpet?authMechanism=SCRAM-SHA-256&authSource=admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return mongoDBConnect.db('adoptpet').collection('api');
}

module.exports = router;