const express = require('express');
const mongo = require('mongodb');
const router = express.Router();


router.get('/', async (req, res) => {
    const data = await getData();
    res.send(await data.find({}).toArray());
});


//POST todo
router.post('/', async (req, res) => {
    const data = await getData();
    await data.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

//DELETE todo
// deleting by id
router.delete('/', async (req, res) => {
    const data = await getData();
    await data.deleteOne({
        _id: req.body.id
    });
    res.status(200).send();
})

async function getData()
{
    // Create your own connection url as env variable
    var dbUrl = process.env.PET_DB || 'mongodb://root:root@localhost/adoptpet?authMechanism=SCRAM-SHA-256&authSource=admin';

    const mongoDBConnect = await mongo.MongoClient.connect(
        dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return mongoDBConnect.db('adoptpet').collection('api');
}

module.exports = router;