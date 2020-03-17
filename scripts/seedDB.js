const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/thebookupDB"
);

const userSeed = [
  {
    email: "blah@blah.com",
    password: "StephenKing"
  },
  {
    email: "blah@example.com",
    password: "JDkilla"
  },
  {
    email: "blah@death.com",
    password: "JDkilla"
  },
  {
    email: "lala@example.com",
    password: "lalala"
  }];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
