const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await burger.selectAll();
    console.log(data);
    res.render('index', {burgers: data});
  } catch(e) {
    console.log('router.get api/burgers error: ' + e);
    res.end();
  }
})

router.patch('/api/burgers/:id', async (req, res) => {
  try {
    const data = await burger.devoured(req.params.id);
    res.json(data);
    // res.status(200).end();
  } catch(e) {
    console.log('router.put api/burgers error: ' + e);    
    res.status(404).end()
  }
})

router.post('/api/burgers', async (req, res) => {
  try {
    const data = await burger.insert(req.body.name);
    res.status(200).send(data);
  } catch(e) {
    console.log('router.post api/burgers error: ' + e);
    res.end();
  }
})

module.exports = router;
