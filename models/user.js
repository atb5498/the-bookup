const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 12;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true, 
        required: true,
        index: { unique: true },
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre("save", function(next){
    //console.log(this);
    if(this.isModified("password")){
        //Encrypt their password
        return bcrypt.genSalt(SALT_WORK_FACTOR).then(salt => {
            return bcrypt.hash(this.password, salt).then(hash => {
                //console.log(hash)
                this.password = hash;
            })
        }).catch(err => {
            console.log("ERROR", err);
        })
    } else{
        return Promise.resolve();
    }
})

UserSchema.methods.checkPassword = function(password){
    return bcrypt.compare(password, this.password);
}



// UserSchema.pre('save', function (next) {
//     var user = this;

//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();

//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//         if (err) return next(err);

//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, function (err, hash) {
//             if (err) return next(err);

//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// });

// UserSchema.methods.comparePassword = function (candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

const User = mongoose.model('User', UserSchema);

module.exports = User;