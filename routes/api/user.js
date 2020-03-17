const router = require("express").Router();
const userController = require("../../controllers/userController");
const isAuthenticated = require("../../middleware/isAuthenticated");

//Matches with "/api/users/"
router.get("/me", isAuthenticated, (req, res) => {
    res.json({
        email: req.user.email
    })
})

router.get("/dashboard", isAuthenticated, (req, res) => {
    res.json("Our User Dashboard lives here :)")
})

module.exports = router;