const connection = require('./connection.js');

function printQuestionMarks(vals) {
  return vals.map(val => '?').toString();
}

function makeQuery(query, values) {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, data) => {
      if (err) {
        reject(err);
      } 
      resolve(data);
    })
  })
}

const orm = {
  /**
  * Select row(s) from a database
  * @param {array} whatToSelect - column names in an array (or select all using *)
  * @param {string} table - name of table to select columns from
  * @example selectOne(['column1', 'column2'], 'my_table')
  * // returns data object from database response
  * @returns {object}
  */
  selectAll: async (whatToSelect, table) => {
    const query = `SELECT ${whatToSelect.toString()} FROM ${table}`

    try {
      const data = await makeQuery(query);
      return data;
    } catch(err) {
      console.log('orm error selectOne: ' + err);
    }
  },

  /**
  * Insert a new row into database
  * @param {string} table - name of table to insert into
  * @param {object} keyValObj - an object with the name of the column as the key and the value of the column as the value of that key
  * @example insertOne('my_table', {column1: column1Val, column2: column2Val})
  * // returns response from database
  * @returns {object}
  */
  insertOne: async (table, keyValObj) => {
    const query = `INSERT INTO ${table} SET ?`;

    try {
      const data = await makeQuery(query, [keyValObj]);
      return data;
    } catch(err) {
      console.log('orm insertOne error: ' + err);
    }
  },

  /**
  * Update column(s) in a row from a database
  * @param {string} table - name of table to insert into
  * @param {object} keyValObj - an object with the name of the column, as the key, and the new value of the column, as the value of the key
  * @param {object} indicatorObj - an object with the key as the name of the column to change and the value of that column in the row you are searching for
  * @example insertOne('my_table', {column1: newVal, column2: newVal}, {id: 5})
  * // returns response from database
  * @returns {object}
  */
  updateOne: async (table, keyValObj, indicatorObj) => {
    const query = `UPDATE ${table} SET ? WHERE ?`;
    const values = [keyValObj, indicatorObj];

    try {
      const data = await makeQuery(query, values);
      return data;
    } catch(err) {
      console.log('orm updateOne error: ' + err)
    }
  }
}

module.exports = orm;
