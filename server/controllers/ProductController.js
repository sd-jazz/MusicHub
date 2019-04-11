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
    const {user_id, listing_name, description, time_stamp, type, tags, price, condition, images, zipcode, category } = req.body
    const db = req.app.get('db')
    db.create_listing([user_id, listing_name, description, time_stamp, type, tags, price.replace(/,/g, ""), condition, images, zipcode, category]).then(listing => {
      res.status(200).json(listing)
    }).catch(err => console.log("createListing", err))
},
  updateListing: (req, res, next) => {
    const {user_id, listing_name, description, type, price, condition, zipcode, category } = req.body
    const {listing_id} = req.params
    const db = req.app.get('db')
    db.update_listing([ listing_name, description, type, price.replace(/,/g, ""), condition, zipcode, category, listing_id, user_id ]).then(listing => {
      res.status(200).json(listing)
    }).catch(err => console.log("createListing", err))
},
    deleteListing: (req, res, next) => {
      const { listing_id, user_id, room_id, room_name } = req.params;
      req.app.get('db').delete_listing([room_name, room_id, listing_id, user_id]).then(response =>{
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
      req.app.get('db').get_listings_by_type(listing_type).then(listings => {
        res.status(200).json(listings);
      }).catch(err => console.log('getListingByType ERROR', err))
    },

    getSimilarListings: (req, res) => {
      console.log("GET SIMILAR LISTINGS REQ.PARAMS", req.params)
      const {listing_type, listing_id} = req.params
      console.log("LISTING_ID CONSOLE", listing_id)
      req.app.get('db').get_similar_listings(listing_type).then(listings => {
        console.log("LISTINGS BACK END", listings)
        res.status(200).json(listings);
      }).catch(err => console.log('getSimilarListings ERROR', err))
    },

    getUserByListing: (req, res) => {
      const {listing_user_id} = req.params
      req.app.get('db').get_user_by_listing([listing_user_id]).then(user => {
        res.status(200).json(user)
      }).catch(err => console.log('Get user by listing ERROR', err))
    },
    getChatroomAsSender: (req, res, db) => {
      const {user_id} = req.params
      req.app.get('db').get_chatroom_as_sender([user_id]).then(rooms => {
        res.status(200).json(rooms)
      }).catch(err => console.log('Get room as sender ERROR', err))
    },
    getChatroomAsRecipient: (req, res) => {
      const {user_id} = req.params
      req.app.get('db').get_chatroom_as_recipient([user_id]).then(rooms => {
        res.status(200).json(rooms)
      }).catch(err => console.log('Get room as recipient ERROR', err))
    },
    getChatroomByRoomName: (req, res) => {
      const {room_name} = req.params
      req.app.get('db').get_chatroom_by_room_name([room_name]).then(room => {
        res.status(200).json(room)
      }).catch(err => console.log('Get room by name ERROR', err))
    },
    getRoomData: (req, res) => {
      const {room_name} = req.params
      req.app.get('db').get_room_data([room_name]).then(roomData => {
        console.log(roomData)
        res.status(200).json(roomData)
      }).catch(err => console.log('Get room data ERROR', err))
    }

  //   editListing: (req, res, next) => {
  //     const { listing_name } = req.params
  //     const { listing_id } = req.query 
  //     console.log("listing_name", listing_name, "req.params", req.params, "{listing_name}",{listing_name}, "listing_id", listing_id)
  //     req.app.get('db').edit_listing_name(listing_name, listing_id).then ( response => {
  //       res.status(200).json(response);
  //     }).catch(err => console.log('editListing ERROR', err))

}