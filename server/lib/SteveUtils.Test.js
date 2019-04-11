const utils = require('./SteveUtils.js');
const testDb = require('./init');
// const axios = require('axios'); 
// Container describe block

describe("Unit tests for utils.js", () => {

    describe("sortPriceByDesc", () => {
      it("it should sort the prices in descending order", () => {
        expect(utils.sortByPriceDesc([2, 4])).toEqual([4, 2])
      })
    }); 

      describe("fireSortFunctions", () => {
        it("it should fire sortByPriceDesc() if value == PHL", () => {
          expect(utils.fireSortFunctions("PHL", [2, 4])).toEqual([4, 2])
        })
      }); 

      let db;

      function clearDatabase(){
          return db.query('DELETE FROM todos');
      }
  
      beforeAll(() => {
          return testDb.initDb().then(database => {
              db = database; 
             
          })
      });
  
      beforeEach(() => {
          return clearDatabase()
      })
  
      afterAll(() => {
          return clearDatabase()
      })

   });

   