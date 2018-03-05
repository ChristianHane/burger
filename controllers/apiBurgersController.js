const Burger = require('../models/burger.js');

async function patch(req, res) {
  try {
    const data = await Burger.devoured(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    if (error.message) {
      return response.status(400).send(error.message);
    }
    return response.status(400).send('Bad Request');
  }
}

async function post(req, res) {
  try {
    const data = await Burger.insert(req.body.name);
    res.status(200).send(data);
  } catch (error) {
    if (error.message) {
      return response.status(400).send(error.message);
    }
    return response.status(400).send('Bad Request');
  }
}

const burgerController = {
  patch,
  post,
}

module.exports = burgerController;
