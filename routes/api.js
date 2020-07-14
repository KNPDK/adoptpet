const express = require('express');
const router = express.Router();
const Pet = require('../model/pet');

router.get('/', async (req, res) => {
    const data =  await (new Pet).findAll();
    res.status(200).send(data);
});

//POST todo
router.post('/', async (req, res) => {
    const type = req.body.type;
    const sex = req.body.sex;
    const age = req.body.age;
    const size = req.body.size;
    const activity = req.body.activity;

    const pet = new Pet(type, sex, age, size, activity);
    if(pet.save())
    {
        res.status(201).send();
    }
    else{
        res.status().send(400);
    }
})

//DELETE todo
// deleting by id
router.delete('/', async (req, res) => {
    const pet = new Pet;
    const searchObject = {_id: req.body.id};
    if(pet.deleteOne(searchObject))
    {
        res.status(200).send();
    }
    else
    {
        res.status(400).send();
    }
    
})

module.exports = router;