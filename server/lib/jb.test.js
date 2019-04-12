const jb = require("./jb");
const testDb = require("./jb_init");

describe("Unit tests for jb.js",() => {
    describe("myFunction", () => {
      it("it should multiply a & b together", () => {
        expect(jb.myFunction(4,2)).toEqual(8);
      });
    });

    describe("dateAscending", () => {
        it('should sort the dates in ascending order', () => {
            expect(jb.sortByDateAsc([2, 4])).toEqual([2, 4]);
        })
    })
  },

  describe("integration test", () => {
    let db;

    function clearDatabase() {
      return db.query("Delete from fake_listings");
    }

    beforeAll(() => {
      return testDb.initDb().then(database => {
        db = database;
        return db.query("Delete from fake_listings")
      });
    });

    beforeEach(() => {
      return clearDatabase();
    });

    afterAll(() => {
      return clearDatabase();
    });

    describe("create", () => {
      it("was successful", done => {
        const listing = {
          listing_name: "Slappa duh bass",
          price: 7
        };

        return jb.createPost(db, listing).then(newListing => {
          expect(newListing.length).not.toEqual(0);

          expect(newListing[0]).toMatchObject({
            listing_id: expect.any(Number),
            price: listing.price,
            listing_name: listing.listing_name
          });
          done()
        });
      });
    });
  })
);