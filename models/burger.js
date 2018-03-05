const orm = require('../config/orm.js');

const burger = {
  selectAll: async () => {
    try {
      const data = await orm.selectAll(['*'], 'burgers');
      return data;
    } catch(err) {
      throw err;
    }
  },
  insert: async (burgerName) => {
    try {
      const data = await orm.insertOne('burgers', {burger_name: burgerName, devoured: false});
      return data;
    } catch(err) {
      throw err
    }
  },
  devoured: async (id) => {
    try {
      const data = await orm.updateOne('burgers', {devoured: true}, {id});
      return data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = burger;
