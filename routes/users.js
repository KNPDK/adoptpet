const express = require('express');
const mongo = require('mongodb');
const router = express.Router();

// bcrypt config
const bcrypt = require('bcrypt');
const saltRounds = 10;


// login feature
router.get('/', async (req, res) => {
    const data = await getData();
    const user = await data.findOne({
        username: req.body.username
    });

    const auth = bcrypt.compareSync(req.body.password, user.password);
    if(auth){
        res.status(200).send({
            id: user._id,
            username: user.username
        })
    }else{
        res.status(401).send()
    }
});


// registration feature 
router.post('/', async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, saltRounds);    

    const data = await getData();
    await data.insertOne({
        username: req.body.username,
        password: hash
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

    return mongoDBConnect.db('adoptpet').collection('users');
}

module.exports = router;