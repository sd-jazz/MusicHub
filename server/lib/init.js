const massive = require('massive');
require('dotenv').config();

let fakeDB;

module.exports = {
  initDb() {
    fakeDB = fakeDB || massive(process.env.TEST_CONNECTION_STRING);
    return fakeDB;
  }
};