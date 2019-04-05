module.exports = {

    getAdmin: (fakeDb) => {
        return fakeDb.query('select * from admins where admin_id = 1')    
    },

    // DELETE and PUT are the same format as POST 
    createAdmin: (fakeDb, admin) => {
        return fakeDb.query('insert into admins(username, email, photo) values (${username}, ${email}, ${photo}) returning *;', {
            username: admin.username,
            email: admin.email,
            photo: admin.photo,
            created_at: new Date()
        })
    }
}

// module.exports = {

//     getAllListings: (req, res, next) => {
//         req.app.get('db').get_all_listings().then(listing => {
//           res.status(200).json(listing);
//         }).catch(err => console.log('(getAllListings) ERROR', err))
//       }
//     }