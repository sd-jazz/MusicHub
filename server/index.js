const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require("massive");
const app = express();
const cloudinary = require('cloudinary');
const pc = require("./controllers/ProductController")

require("dotenv").config();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( db => {
    console.log("connected to db")
    app.set('db', db)
  }).catch( err => console.log(err) );
  
  app.use(session({
    secret: "mega hyper ultra secret",
    saveUninitialized: false,
    resave: false,
  }));

  // PRODUCT CONTROLLER 

  app.post('/api/listings', pc.createListing);
  app.get('/api/get_listings', pc.getAllListings);
  app.get('/api/get_user_listings/:id', pc.getUserListings);
  app.delete('/api/delete_listing:listing_id', pc.deleteListing);
  app.get('/api/listing:id', pc.getListingID)
  app.get('/api/listing/:searchFilter', pc.getStatusAll)

  // app.put('/api/edit_listing/', pc.editListing;

  // CLOUDINARY

  app.get('/api/upload', (req, res) => {

    const timestamp = Math.round((new Date()).getTime() / 1000);
    
    const api_secret  = process.env.CLOUDINARY_SECRET_API;

    const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);

    const payload = {
        signature: signature,
        timestamp: timestamp
    };
        res.json(payload);

})

  
const PORT = process.env.SERVER_PORT || 4010; 

app.listen(PORT, () => console.log(`Ready to roll out on port ${PORT}`))

  