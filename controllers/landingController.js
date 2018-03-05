const Burger = require('../models/burger.js');

async function get(req, res) {
  try {
    const data = await Burger.selectAll();
    res.status(200).render('index', {burgers: data});
  } catch (error) {
    if (error.message) {
      return response.status(404).send(error.message);
    }
    return response.status(404).send('Not found');
  }
}

landingController = {
  get,
}

module.exports = landingController;