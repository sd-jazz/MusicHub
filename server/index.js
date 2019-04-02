const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const app = express();
const cloudinary = require("cloudinary");
const pc = require("./controllers/ProductController");
const nodemailer = require("nodemailer");
const aC = require("./controllers/AuthController");
const socket = require("socket.io");

require("dotenv").config();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    console.log("connected to db");
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: "mega hyper ultra secret",
    saveUninitialized: false,
    resave: false,
  }));

  // PRODUCT CONTROLLER 

  app.post('/api/listings', pc.createListing);
  app.get('/api/get_listings', pc.getAllListings);
  app.get('/api/get_user_listings/:id', pc.getUserListings);
  app.delete('/api/delete_listing/:listing_id/:user_id', pc.deleteListing);
  app.get('/api/listings/:listing_id', pc.getListingInfo)
  app.get('/api/get_listings_by_type/:listing_type', pc.getListingByType)
  app.get('/api/user_data', aC.getUserData)
  app.get('/auth', aC.login)
  app.get('/auth/logout', aC.logout)
  app.get('/api/listing/:listing_id', pc.getListingInfo)
  app.get('/api/listing/search/:searchFilter', pc.getStatusAll)

  // app.put('/api/edit_listing/', pc.editListing;

  // CLOUDINARY

  app.get('/api/upload', (req, res) => {
    console.log("CLOUDINARY BACK END")
    const timestamp = Math.round((new Date()).getTime() / 1000);
    
    const api_secret  = process.env.CLOUDINARY_SECRET_API;

    const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);

    const payload = {
        signature: signature,
        timestamp: timestamp
    };
        res.json(payload);
        console.log("PAYLOAD", payload, "SIGNATURE", signature);

})

// app.post()

//Nodemailer Start
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@address.com',
//     pass: 'yourpassword'
//   }
// });

// const mailOptions = {
//   from: 'sender@email.com', // sender address
//   to: 'to@email.com', // list of receivers
//   subject: 'Subject of your email', // Subject line
//   html: '<p>Your html here</p>'// plain text body
// };

// transporter.sendMail(mailOptions, function (err, info) {
//   if(err)
//     console.log(err)
//   else
//     console.log(info);
// });
//Nodemailer End
const PORT = process.env.SERVER_PORT || 4010;

const server = app.listen(PORT, () =>
  console.log(`Ready to roll out on port ${PORT}`)
);
const io = socket(server);
//SOCKETS START
io.on("connection", function(socket) {
  console.log("a user connected", socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data, console.log(data));
  });

  socket.on("SEND_PRIVATE", data => {
    const db = app.get("db");
    let uniqueRoom = `${data.user1_id} and ${data.user2_id} room`;
    db.check_rooms([data.user1_id, data.user2_id]).then(room_response => {
      if (!response.length) {
        db.create_room([data.user1_id, data.user2_id, uniqueRoom]).then(response => {
          socket.join(response[0].room_name);
        });
      }
      else {
        socket.join(room_response.room_name)
      }
    });
  });
});
