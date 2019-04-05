const sinon = require('sinon');
const aC = require('./AdminController')
const testDb = require('../../test/init')
// Container describe 

/* 
    ENDPIONTS
    app.get("/api/get_listings", pc.getAllListings);
    app.get("/api/session_info", aC.sessionInfo);
*/

describe("Unit tests for db queries", () => {

    describe("getAdmin", () => {
        it("should send out a select * from admins where admin_id = 1", () => {
            const fakeDb = {
                query: sinon.mock().withArgs(
                    'select * from admins where admin_id = 1'
                )
            }
            return aC.getAdmin(fakeDb)
        })
    })

    describe ('createAdmin', () => {
        // url, body 
        const admin = {
            username: "Parmesan",
            email: "sean.parmar@yahoo.com",
            photo: "https://s3.amazonaws.com/michaelkerr-projectmedia/BZQJlHb.jpg"
        }
        const fakeDb = {
            query: sinon.mock().withArgs(
                'insert into admins(username, email, photo) values (${username}, ${email}, ${photo}) returning *;',
                sinon.match({
                    username: admin.username,
                    email: admin.email,
                    photo: admin.photo,
                    created_at: sinon.match.date
                })
            )
        }
        return aC.createAdmin(fakeDb, admin)
    })

})

describe('Integration tests for adminController', () => {

    let db 
    beforeAll(() => {
        return testDb.initDb().then(database => {
            return db = database
        })
    })

    describe('createAdmin', () => {
        it('should create an admin in our db', () => {
            const admin = {
                username: "Parmesan",
                email: "sean.parmar@yahoo.com",
                photo: "https://s3.amazonaws.com/michaelkerr-projectmedia/BZQJlHb.jpg"
            }
            return aC.createAdmin(db, admin).then(createdAdmin => {
                expect(createdAdmin.length).not.toEqual(0)
                expect(createdAdmin[0]).toMatchObject({
                    id: expect.any(Number),
                    username: expect.any(String),
                    email: expect.any(String),
                    photo: expect.any(String),
                    created_at: expect.any(Date)
                    
                })
            })
        })
    })
})