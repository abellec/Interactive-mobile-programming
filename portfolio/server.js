/* To run this example,
 * Type in terminal:
 * npm init
 * npm install express --save
 * npm start
 * Please note that your js.file must be named as server.js. If not, you
 * must manually add scripts start section to package.json file.
 */

var express = require('express');

var app = express();

var PORT = process.env.PORT || 5000;
app.set('port', PORT);



// Map public files folder
// You should put static files here.
// Such as images, css-files and so on.
// But not user content.
app.use(express.static(__dirname + '/public'));

// All view template files goes here.
// Here I use ejs engine.
// More info: https://www.npmjs.com/package/ejs
// There I have two sub folders, pages & partials
// It's taken from Heroku demo app.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Root page will be the index page (views/pages/index)
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/labs', function(req, res) {
    res.render('pages/labs');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('/lab1', function (req, res) {
    res.render('pages/alllabs/lab1');
})
app.get('/lab2', function (req, res) {
    res.render('pages/alllabs/lab2');
})
app.get('/lab3', function (req, res) {
    res.render('pages/alllabs/lab3');
})
app.get('/lab4', function (req, res) {
    res.render('pages/alllabs/lab4');
})
app.get('/lab5', function (req, res) {
    res.render('pages/alllabs/lab5');
})
app.get('/lab6', function (req, res) {
    res.render('pages/alllabs/lab6');
})


app.get('/TP1/test', function (req, res) {
    res.render('pages/alllabs/TP1/test');
})
app.get('/style.css', function (req, res) {
    res.render('pages/alllabs/TP1/style');
})
app.get('/scripts.js', function (req, res) {
    res.render('pages/alllabs/TP1/scripts');
})

// Start to listen incomig requests (start the web server)
app.listen(app.get('port'), function() {
  console.log('Up and running in a port:', PORT);
});
