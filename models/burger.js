const orm = require('../config/orm.js');

const burger = {
  selectAll: async () => {
    try {
      const data = await orm.selectAll(['*'], 'burgers');
      return data;
    } catch(e) {
      console.log('burger.selectAll error: ' + e);
    }
  },
  insert: async (burgerName) => {
    try {
      const data = await orm.insertOne('burgers', {burger_name: burgerName, devoured: false});
      return data;
    } catch(e) {
      console.log('burger.insert error: ' + e);
    }
  },
  devoured: async (id) => {
    try {
      const data = await orm.updateOne('burgers', {devoured: true}, {id});
      return data;
    } catch (e) {
      console.log('burger.devoured error: ' + e);
    }
  }
}

module.exports = burger;
