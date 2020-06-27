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


async function getData()
{
    const mongoDBConnect = await mongo.MongoClient.connect(
        'mongodb://root:root@localhost/adoptpet?authMechanism=SCRAM-SHA-256&authSource=admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return mongoDBConnect.db('adoptpet').collection('api');
}

module.exports = router;