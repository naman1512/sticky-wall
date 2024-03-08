require('dotenv').config() //importing dotenv or environment variable
const express =  require ('express') //importing express
const expressLayouts =  require ('express-ejs-layouts') //importing express layouts

const app = express(); // creating app as express framework content

const port = 5000 || process.env.PORT; // service port used 

//accepts data through the forms and input through the website 
app.use(express.urlencoded({extended: true})) 
app.use(express.json()); 

//Static Files
app.use(express.static('public')) //makes linking external media or files publically on the project

//Templating engine
app.use (expressLayouts)
app.set('layout' ,  './layouts/main')
app.set ('view engine'  , 'ejs');

app.get('/' ,  function(req ,res){ //function for the request and response
res.render('index');
}) ;

app.listen (5000, () =>{
    console.log (`app listening on port ${port}`)
})
