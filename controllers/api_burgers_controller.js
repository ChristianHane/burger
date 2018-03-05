const burger = require('../models/burger.js');

async function patch(req, res) {
  try {
    const data = await burger.devoured(req.params.id);
    res.status(200).json(data);
  } catch(e) {  
    res.status(404).send({ error: e.message })
  }
}

async function post(req, res) {
  try {
    const data = await burger.insert(req.body.name);
    res.status(200).send(data);
  } catch(e) {
    res.status(404).send({ error: e.message });
  }
}

const burgerController = {
  patch,
  post,
}

module.exports = burgerController;
