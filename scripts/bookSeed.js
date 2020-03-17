const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/thebookupDB"
);

const bookSeed = [
    {
        author: "Jon Duckett",
        title: "Javascript and Jquery: Interactive Front-end",
        publishedDate: "2017",
        email: "hthomas146@utexas.edu",
        ISBN: "9781548955533",
        price: "49",
        image: "https://books.google.com/books/content?id=aAMrswEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71QoDWYKMAS6fPszbSa2eqgtlRqM_Bo27dpVvDPOTdRpqC_CSLYEMni_jruMCBnugVMxkTp-MypuUpnWB6EhQsx03TBIy9xuSPVdn1XjJNXZou8Vok78Ykk_9HcZbX5U6hOpEtc"
    },
    {
        author: "Jon Duckett",
        title: "HTML and CSS: Design and Build Websites",
        publishedDate: "2011",
        email: "hthomas146@utexas.edu",
        ISBN: "9781118008188",
        price: "39",
        image: "https://books.google.com/books/content?id=aGjaBTbT0o0C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73mF6ax--_ANjQwQbUhZfvwqJBXmGLmqCPnZ8knmxNg1M0VCl-PtKayf3Lqcv6xnFCoXnfjuYqMXuJVreWd06TQVva7U5itaJ_RRGv8zy7zwYCBXN53urw9rjZ4_BkLucj-AIB4"
    }
]

db.Listing
    .remove({})
    .then(() => db.Listing.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });