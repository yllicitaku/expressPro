const GoogleStrategy = require('passport-google-oauth20').Strategy

const keys = require('../config/key')

const mongoose = require('mongoose');
const User = require('user');
const passport  = require('passport');
const key = require('../config/key');


passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.findById(id).then(user =>{
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        async(accessToken, refreshToken, profile, done)=>{
            const existingUser = await User.findByOne({googleId:profile.id});
            if(existingUser){
                return done(null, existingUser)
            }
            const user = await new User({googleId: profile.id}).save()
            done(null, user)

        }
    )
)