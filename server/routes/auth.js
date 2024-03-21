const express = require('express');
const router = express.Router();
const passport =  require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
 console.log(profile)
  }
));

//google login route
router.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email' ,'profile'] }));

  //retrieve user data route
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-faliure',
    successRedirect: '/dashboard'
 })
);

//route is something goes wrong
router.get('/login-faliure' , (req , res ) => {
    res.send('Something Went Wrong :/')
})

module.exports = router;