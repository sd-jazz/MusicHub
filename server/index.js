const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require("massive");
const app = express();

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

const PORT = process.env.SERVER_PORT || 4040; 
app.listen(PORT, () => console.log(`Ready to roll out on port ${PORT}`))

  