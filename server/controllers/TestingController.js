module.exports = {

    fakeGetAllListings: (req, res, next) => {
        req.app.get('fakeDB').fake_get_all_listings.then(listing => {
            res.status(200).json(listing)
        }).catch(err => console.log('(fakegetAllListings)ERROR', err))
    }

}