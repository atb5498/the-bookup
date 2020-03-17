//=================================================================
//Lets do it
//=================================================================
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("./config/passport");
const isAuthenticated = require("./middleware/isAuthenticated")
const routes = require("./routes");
const authRoutes = require("./routes/api/authRoutes");
// const connectStore = require("connect-mongo");
const app = express();
const PORT = process.env.PORT || 3001;

//Models for sending email and password to database
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sessions
app.use(session(
    { 
        name: process.env.SESSION_NAME, 
        secret: process.env.SESSION_SECRET, 
        resave: true, 
        saveUninitialized: true
    }))
//Using passport to check user authentication
app.use(passport.initialize());
app.use(passport.session());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.get("/api/hello", function (req, res) {
    res.send("SUCCESS ===================Server is talking to the frontend");
})

//New Auth login routes ==== Moved to routes/index.js
// app.use("/api/auth/", authRoutes);
//===================================================

//Sign up route ======= Moved to /routes/api/authRoutes========
// app.post("/api/auth/signup", function (req, res) {
//     db.User.create(req.body).then(dbUser => {
//         res.json(dbUser);
//     }).catch(err => console.log(err));
// })
// ============================================================

//Login route =================================================
// app.post("/api/login", function (req, res) {
//Do I have an entry with this email address
//=========================================
//Moving everything in here to config/passport
//=========================================
// db.User.findOne({ email: req.body.email }).then(dbUser => {
//     if (!dbUser) {
//         return res.status(401).json(false)
//     } else {
//         console.log(dbUser);
//         dbUser.checkPassword(req.body.password).then(isMatch => {
//             if (isMatch) {
//                 console.log("signed in");
//                 return res.status(200).json(dbUser);
//             } else {
//                 return res.status(401).json(false);
//             }
//         })
//     }
// }).catch(err => console.log(err));
// })
//================================================================

//login route w/ user Authentication ======= Moved to /routes/api/authRoutes========
// app.post("/api/auth/login", passport.authenticate("local"), (req, res) => {
//     res.json(req.user);
// })

// //logout route w/ user Authentication
// app.get("/api/auth/logout", (req, res) => {
//     req.logout();
//     res.sendStatus(200);
// })
// ========================================================================================


//Create a route that will only work for logged in users =======Moved to routes/api/user.js
// app.get("/api/user/me", isAuthenticated, (req, res) => {
//     res.json({
//         email: req.user.email
//     })
// })
//==================================================================================================

//route to a display of user dashboard after successful login ========== Moved to routes/api/user.js
// app.get("/api/user/dashboard", isAuthenticated, (req, res) => {
//     res.json("Our User Dashboard lives here :)")
// })
//===================================================================================================

// //Creating Listing Collection
// app.post("/api/listing", function (req, res) {
//     db.Listing.create(req.body).then(dbListing => {
//         res.json(dbListing);
//     }).catch(err => console.log(err));
// })

// //Getting all books in our collections
// app.get("/api/listing", function (req, res) {
//     db.Listing
//         .find(req.query)
//         // .sort({ title: "desc" })
//         .then(dbListing => res.json(dbListing))
//         .catch(err => res.status(422).json(err));
// })

// //Getting books by ID
// app.get("/api/listing/:id", function (req, res) {
//     db.Listing
//         .findById(req.params.id)
//         .then(dbListing => res.json(dbListing))
//         .catch(err => res.status(422).json(err))
// })

// //Deleting book
// app.delete("/api/listing/:id", function (req, res) {
//     db.Listing
//         .findById({ _id: req.params.id })
//         .then(dbListing => dbListing.remove())
//         .then(dbListing => res.json(dbListing))
//         .catch(err => res.status(422).json(err))
// })


// Add routes, both API and view 
app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/thebookupDB")
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
