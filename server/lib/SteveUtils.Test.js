const utils = require('./SteveUtils.js');
const testDb = require('./SteveInit.js');

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

      describe("INTEGRATION TEST", () => {
        let db;
    
        function clearDatabase() {
          return db.query("Delete from fake_listings");
        }
    
        beforeAll(() => {
          return testDb.initDb().then(database => {
            db = database;
          });
        });
    
        beforeEach(() => {
          return clearDatabase();
        });
    
        afterAll(() => {
          return clearDatabase();
        });
    
        describe("create", () => {
          it("inserts a new listing", () => {
            //create an object to test
    
            const listing = {
              listing_name: "Fodera Bass",
              price: 1000
            };
    
            return utils.createListing(db, listing).then(newListing => {
              // check to see if we are returning a value
              expect(newListing.length).not.toEqual(0);
    
              //check to see if the object that was created is the same as the one we get back
              expect(newListing[0]).toMatchObject({
                listing_id: expect.any(Number),
                price: listing.price,
                listing_name: listing.listing_name
              });
            });
          });
        });
      })
    
   });

   