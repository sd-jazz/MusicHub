module.exports = {

    getAllListings: (req, res, next) => {
        req.app.get('db').get_all_listings().then(listing => {
          res.status(200).json(listing);
        }).catch(err => console.log('(getAllListings) ERROR', err))
      },
  
      getUserListings: (req, res, next) => {
        console.log("getUserListings")
        const { id } = req.params
        console.log("req.params", req.params)
        req.app.get('db').get_user_listings([id]).then(userListings => {
          res.status(200).json(userListings);
        }).catch(err => console.log('(getUserListings) ERROR', err))
      },

      createListing: (req, res, next) => {
        const {user_id, listing_name, description, time_stamp, type, tags, price, condition } = req.body
        const db = req.app.get('db')
        db.create_listing([user_id, listing_name, description, time_stamp, type, tags, price, condition]).then(listing => {
          res.status(200).json(listing)
        }).catch(err => console.log("createListing", err))
    },
  
      deleteListing: (req, res, next) => {
        const { listing_id } = req.params;
        req.app.get('db').delete_listing({ listing_id: listing_id }).then(response =>{
          res.status(200).json(response);
        }).catch(err => console.log ('deleteListing ERROR', err))
      },

      getListingInfo: (req, res, next) => {
        const { listing_id } = req.params
        req.app.get('db').get_listing_info([listing_id]).then(listing => {
          res.status(200).json(listing);
        }).catch(err => console.log('getListingID ERROR', err))
      },
      getStatusAll: (req, res, next) => {
        console.log('REQ.PARAMS', req.params)
        const {searchFilter} = req.params
        req.app.get('db').get_status_all([searchFilter]).then(listings => {
          res.status(200).json(listings)
        })
      },
      getListingByType: (req, res) => {
        const {listing_type} = req.params
        req.app.get('db').get_status_all(listing_type).then(listings => {
          res.status(200).json(listings);
        }).catch(err => console.log('getListingByType ERROR', err))
      }

    //   editListing: (req, res, next) => {
    //     const { listing_name } = req.params
    //     const { listing_id } = req.query 
    //     console.log("listing_name", listing_name, "req.params", req.params, "{listing_name}",{listing_name}, "listing_id", listing_id)
    //     req.app.get('db').edit_listing_name(listing_name, listing_id).then ( response => {
    //       res.status(200).json(response);
    //     }).catch(err => console.log('editListing ERROR', err))

}