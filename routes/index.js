const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/authRoutes");
const apiUser = require("./api/user");
const apiListing = require("./api/listings");

// API user - logged in routes
router.use("/api/user/", apiUser);

//New auth routes
router.use("/api/auth/", authRoutes);

//Listing routes
router.use("/api/listing/", apiListing);


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
