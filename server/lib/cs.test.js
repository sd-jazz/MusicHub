// const cs = require("./cs");
// const sinon = require("sinon");
// const testDb = require("./cs_init");

// describe("Unit tests for cs.js",() => {
//     describe("sortPriceByAsc", () => {
//       it("it should sort the prices in ascending order", () => {
//         expect(cs.sortByPriceAsc([4, 2])).toEqual([2, 4]);
//       });
//     });

//     describe('addMessage', () => {
//         it('should add message to array', () => {
//             expect(cs.addMessage('Hello')).toEqual({message: 'Hello'})
//         })
//     })
//   },

//   describe("integration test", () => {
//     let db;

//     function clearDatabase() {
//       return db.query("Delete from fake_listings");
//     }

//     beforeAll(() => {
//       return testDb.initDb().then(database => {
//         db = database;
//       });
//     });

//     beforeEach(() => {
//       return clearDatabase();
//     });

//     afterAll(() => {
//       return clearDatabase();
//     });

//     describe("create", () => {
//       it("inserts a new listing with a name and price", () => {
//         //create an object to test

//         const listing = {
//           listing_name: "Sick Guitar",
//           price: 1
//         };

//         return cs.createListing(db, listing).then(newListing => {
//           // check to see if we are returning a value
//           expect(newListing.length).not.toEqual(0);

//           //check to see if the object that was created is the same as the one we get back
//           expect(newListing[0]).toMatchObject({
//             listing_id: expect.any(Number),
//             price: listing.price,
//             listing_name: listing.listing_name
//           });
//         });
//       });
//     });
//   })
// );
