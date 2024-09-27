module.exports = {
    myFunction(a,b){
        return a * b;
    },
    sortByDateAsc(arr){
        let dateAsc = arr.sort((a, b) => (a.time_stamp - b.time_stamp))
            return dateAsc
    },
    createPost(db, listing){
        return db.query('insert into fake_listings (listing_name, price) VALUES (${listing_name}, ${price})returning *;', {
            listing_name: listing.listing_name,
            price: listing.price,
        })
    }
}