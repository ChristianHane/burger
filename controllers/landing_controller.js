const burger = require('../models/burger.js');

async function get(req, res) {
  try {
    const data = await burger.selectAll();
    res.status(200).render('index', {burgers: data});
  } catch(e) {
    res.status(404).send({error: e.message});
  }
}

landingController = {
  get,
}

module.exports = landingController;