const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require("massive");
const app = express();
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

  // ProductController 

  app.post('/api/listings', pc.createListing);
  app.get('/api/get_listings', pc.getAllListings);
  app.get('/api/get_user_listings/:id', pc.getUserListings);
  app.delete('/api/delete_listing:listing_id', pc.deleteListing);
  // app.put('/api/edit_listing/', pc.editListing;
  

const PORT = process.env.SERVER_PORT || 4040; 
app.listen(PORT, () => console.log(`Ready to roll out on port ${PORT}`))

  