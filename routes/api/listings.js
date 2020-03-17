const router = require("express").Router();
const db = require("../../models");
const listingController = require("../../controllers/listingController")

//Creating Listing Collection
router.route("/").post(listingController.create);

//Getting all books in our collections
router.route("/").get(listingController.findAll);

//Getting books by ID
router.route("/:id").get(listingController.findByID);

//Deleting book
router.route("/:id").delete(listingController.remove)

module.exports = router;
