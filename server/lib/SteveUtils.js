const axios = require('axios')

module.exports = {

    sortByPriceDesc (arr) {
          let priceDesc = arr.sort((a, b) => (b - a))
          return priceDesc
      },
    
      fireSortFunctions (str, arr) {
        if(str === "PHL"){
            return this.sortByPriceDesc(arr)
        }
      },

      createListing(db, listing){
        return db.query('insert into fake_listings (listing_name, price) VALUES (${listing_name}, ${price})returning *;', {
            listing_name: listing.listing_name,
            price: listing.price,
        })
    }}