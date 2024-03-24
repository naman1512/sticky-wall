const express = require('express');
const router = express.Router();
const passport =  require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require ('../models/User')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async function(accessToken, refreshToken, profile, done) {
    const newUser = {
      googleId: profile.id,
      displayName: profile.displayName,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      profileImage: profile.photos[0].value
    }

    //authentication confirmation
try {
  let user = await User.findOne({ googleId: profile.id }); //searching for existing user in darabase
  if (user) {
    done(null, user);
  } else {
    user = await User.create(newUser); //creating new user
    done(null, user);
  }
} catch (error) {
  console.log(error);
}


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

// Destroy user session
router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if(error) {
      console.log(error);
      res.send('Error loggin out');
    } else {
      res.redirect('/')
    }
  })
});

// Presist user data after successful authentication
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Retrieve user data from session.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = router;