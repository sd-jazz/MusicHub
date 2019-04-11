module.exports = {
    createListing(db, listing){
        return db.query('insert into fake_listings (listing_name, price) VALUES (${listing_name}, ${price})returning *;', {
            listing_name: listing.listing_name,
            price: listing.price,
        })
    },
    sortByPriceAsc(arr){
        let priceAsc = arr.sort((a, b) => (a - b))
          return priceAsc
    },
    addMessage(data){
        return({ message: data});
      }
}