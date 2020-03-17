const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { User } = require("../models");
//Creating a localStragey 
//localStrategy assumes that you are using a username by default. Change it to recognize "email"
passport.use(new localStrategy({ usernameField: "email" }, function (email, password, done) {
    User.findOne({ email: email }).then(dbUser => {
        if (!dbUser) {
            return res.status(401).json(false)
        } else {
            dbUser.checkPassword(password).then(isMatch => {
                if (isMatch) {
                    return done(null, dbUser);
                } else {
                    return done(null, false, { message: "Incorrect username or password" });
                }
            })
        }
    }).catch(err => console.log(err))
}))

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

module.exports = passport;