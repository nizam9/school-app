// import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
import UserSchema from '../app/modules/models/user-model';

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            console.log(email , password ,'indiiiiiiiiiiii');
            // Match user
            UserSchema.findOne({
                email: email,
                password:password
            }).then(user => {
                console.log('The user is: ', user);
                if (!user) {
                    return done(null, false, { message: 'Invalid Credentials', code:401 });
                }
                return done(null, user , { message: 'Login Successful', code:200 });
                // Match password
                // bcrypt.compare(password, user.password, (err, isMatch) => {
                //     if (err) throw err;
                //     if (isMatch) {
                //         return done(null, user);
                //     } else {
                //         return done(null, false, { message: 'Password incorrect' });
                //     }
                // });
            });
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};