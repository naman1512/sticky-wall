require('dotenv').config() //importing dotenv or environment variable
const express = require('express') //importing express
const expressLayouts = require('express-ejs-layouts') //importing express layouts
const methodOverride = require ('method-override')
const connectDB = require('./server/config/db')
const session =  require('express-session') //stores sessions in the database
const passport = require ('passport') //authentication
const MongoStore = require('connect-mongo')//stores the data in database

const app = express(); // creating app as express framework content

const port = 5000 || process.env.PORT; // service port used 

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
    }),
   
  }));

//passport aunthentication
app.use(passport.initialize());
app.use(passport.session())

//accepts data through the forms and input through the website 
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use (methodOverride("_method"))
//dababase connect
connectDB();

//Static Files
app.use(express.static('public')) //makes linking external media or files publically on the project

//Templating engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');

//Routes 
app.use('/' ,  require('./server/routes/auth'))
app.use('/' ,  require('./server/routes/index'))
app.use('/' ,  require('./server/routes/dashboard'))

//Handling 404
app.get('*', function(req, res) {
    res.status(404).render('404');
 });
 

app.listen(5000, () => {
    console.log(`app listening on port ${port}`)
})

